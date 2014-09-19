#!/usr/bin/env python
# encoding: utf-8

import os
import re
import json
import jsmin
import cssmin
import inspect
import collections

from waflib import TaskGen, Task, Node
from waflib.TaskGen import extension, before_method,feature
from waflib.Configure import conf

def remove_comments(text):
	"""Remove C-style /*comments*/ from a string."""

	p = r'/\*[^*]*\*+([^/*][^*]*\*+)*/|("(\\.|[^"\\])*"|\'(\\.|[^\'\\])*\'|.[^/"\'\\]*)'
	return ''.join(m.group(2) for m in re.finditer(p, text, re.M|re.S) if m.group(2))

# jinja2 filter

def cvarname(name):
	"""Convert a string to a valid c variable name (remove space,commas,slashes/...)."""
	return re.sub(r'[^\w\s]', '_', name)

def embed_html(text):
	"""Remove new lines, tabs and comments"""
	return "'" + remove_comments(text.replace('\n', '').replace('\t', '').replace('\\', r'\\').replace("'", "\\'")) + "';"

def minify_css(text):
	"""Minify CSS"""
	return cssmin.cssmin(text)

def minify_js(text):
	"""Minify JS"""
	return jsmin.jsmin(text)

filters = {'max' : max, 'cvarname' : cvarname, 'embed_html' : embed_html, 'minify_css' : minify_css, 'minify_js': minify_js}

class autoconfig(Task.Task):
	color   = 'PINK'

	def run(self):
		"""Render jinja template."""
		from jinja2 import Environment
		from jinja2 import FileSystemLoader
		
		rootdir = self.generator.path.abspath()
		tpldir = os.path.dirname(self.inputs[0].abspath())
		tpl = os.path.basename(self.inputs[0].abspath())
		
		env = Environment(loader = FileSystemLoader([rootdir, tpldir]), trim_blocks=False)

		#add custom filter
		for filterName, filterFun in filters.iteritems():
			env.filters[filterName] = filterFun
	
		template = env.get_template(tpl)
		
		f = open(self.outputs[0].abspath(), 'w')
		f.write(template.render(self.appinfo))
		f.close()

def configure(conf):
	""" detect jinja installation """
	#load jinja module
	#conf.check_python_module('jinja2')
	try:
		from jinja2 import Environment
		from jinja2 import FileSystemLoader
	except Exception, e:
		conf.fatal("Jinja template engine is not available! (" + e.message + ")")

def build(bld):
	jinjapath = os.path.dirname(inspect.getfile(inspect.currentframe()))
	jinjapath = os.path.join(jinjapath, 'templates/*.jinja')
	for template in bld.path.ant_glob([jinjapath]):
		bld.add_manual_dependency(
			template,
			bld.path.find_node('appinfo.json'))
			
@extension('.jinja')
def process_autoconfig(self, node): 
	out = node.change_ext('')

	out = Node.split_path(out.abspath())[-1]

	appinfo_content=open('appinfo.json')
	appinfo_json=json.load(appinfo_content,object_pairs_hook=collections.OrderedDict)

	out = self.bld.path.get_bld().make_node([str(out)])

	tsk = self.create_task('autoconfig', [node], [out])
	tsk.appinfo = appinfo_json

	if out.suffix() in ['.c']:
		self.source.append(out)

@feature('autoconf')
@before_method("process_source")
def fprocess_autoconfig(self):
	jinjapath = os.path.dirname(inspect.getfile(inspect.currentframe()))
	jinjapath = os.path.join(jinjapath, 'templates/*.jinja')
	for src in self.path.ant_glob([jinjapath]):
		self.process_autoconfig(src)

class mergejs(Task.Task):
	color   = 'CYAN'

	def run(self):
		all_js = "\n".join([node.read() for node in self.inputs])
		f = open(self.outputs[0].abspath(), 'w')
		f.write(all_js)
		f.close()

@feature('mergejs')
def fprocess_mergejs(self):
	out_js = self.bld.path.find_or_declare(['pebble-js-app.js'])
	src_js = self.path.ant_glob('src/**/*.js')
	generated_js = self.bld.path.find_or_declare(['autoconfig.js'])
	self.create_task('mergejs', src_js + [generated_js], [out_js])

@conf
def pbl_autoconfprogram(self,*k,**kw):
	kw['features']='c cprogram cprogram_pebble_app autoconf mergejs'
	return self(*k,**kw)
