#!/usr/bin/env python
# encoding: utf-8

import os
import json

from waflib import TaskGen, Task, Node
from waflib.TaskGen import extension

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
	
		template = env.get_template(tpl)
		
		f = open(self.outputs[0].abspath(), 'w')
		f.write(template.render(self.appinfo))
		f.close()

def configure(conf):
	""" detect jinja installation """
	#load jinja module
	# conf.check_python_module('jinja2')
	try:
		from jinja2 import Environment
		from jinja2 import FileSystemLoader
	except Exception, e:
		conf.fatal("Jinja template engine is not available! (" + e.message + ")")


@extension('.jinja')
def process_autoconfig(self, node):	
	out = node.change_ext('')

	out = Node.split_path(out.abspath())[-1]

	appinfo_content=open('appinfo.json')
	appinfo_json=json.load(appinfo_content)

	out = self.bld.path.find_or_declare([str(out)])

	tsk = self.create_task('autoconfig', [node], [out])
	tsk.appinfo = appinfo_json

	if out.suffix() in ['.c']:
		self.source.append(out)
