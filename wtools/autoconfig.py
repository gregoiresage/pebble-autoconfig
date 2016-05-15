#!/usr/bin/env python
# encoding: utf-8

import sys
import os
import re
import json
import inspect
import collections

try:
	import jsmin
	import cssmin
	from jinja2 import Environment
	from jinja2 import FileSystemLoader
except ImportError:
	message = '\nSome Python modules are missing, you probably forgot to patch your current sdk'
	message += '\nPlease follow the instructions :\n\n'

	path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

	message += '  Ubuntu : pip install --target=<***full_path_to_your_home***>/.pebble-sdk/SDKs/current/.env/lib/python2.7/site-packages/ -r ' + path + '/requirements.txt\n'
	message += '  OSX    : pip install --target=/usr/local/Cellar/pebble-sdk/<***current_version***>/libexec/vendor/lib/python2.7/site-packages/ -r ' + path + '/requirements.txt\n'

	message += '\n\nRelaunch the build and it should be okay !'
	message += '\n\n'

	print message
	sys.exit(-1)

from waflib import TaskGen, Task, Node
from waflib.TaskGen import extension, before_method,feature
from waflib.Configure import conf

def nearest_color_to_pebble64_palette(r, g, b, a):
    """
    match each rgba32 pixel to the nearest color in the 8 bit pebble palette
    returns closest rgba32 color triplet (r, g, b, a)
    """

    a = ((a + 42) / 85) * 85  # fast nearest alpha for 2bit color range
    # clear transparent pixels (makes image more compress-able)
    # and required for greyscale tests
    if a == 0:
        r, g, b = (0, 0, 0)
    else:
        r = ((r + 42) / 85) * 85  # nearest for 2bit color range
        g = ((g + 42) / 85) * 85  # nearest for 2bit color range
        b = ((b + 42) / 85) * 85  # nearest for 2bit color range

    return r, g, b, a

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

def gcolor_to_hex(text):
	"""Convert a color to its hex value"""
	if text.startswith('GColor') :
		mapping = {"GColorBlack":"0x000000","GColorOxfordBlue":"0x000055","GColorDukeBlue":"0x0000AA","GColorBlue":"0x0000FF","GColorDarkGreen":"0x005500","GColorMidnightGreen":"0x005555","GColorCobaltBlue":"0x0055AA","GColorBlueMoon":"0x0055FF","GColorIslamicGreen":"0x00AA00","GColorJaegerGreen":"0x00AA55","GColorTiffanyBlue":"0x00AAAA","GColorVividCerulean":"0x00AAFF","GColorGreen":"0x00FF00","GColorMalachite":"0x00FF55","ColorMediumSpringGreen":"0x00FFAA","GColorCyan":"0x00FFFF","GColorBulgarianRose":"0x550000","GColorImperialPurple":"0x550055","GColorIndigo":"0x5500AA","GColorElectricUltramarine":"0x5500FF","GColorArmyGreen":"0x555500","GColorDarkGray":"0x555555","GColorLiberty":"0x5555AA","GColorVeryLightBlue":"0x5555FF","GColorKellyGreen":"0x55AA00","GColorMayGreen":"0x55AA55","GColorCadetBlue":"0x55AAAA","GColorPictonBlue":"0x55AAFF","GColorBrightGreen":"0x55FF00","GColorScreaminGreen":"0x55FF55","GColorMediumAquamarine":"0x55FFAA","GColorElectricBlue":"0x55FFFF","GColorDarkCandyAppleRed":"0xAA0000","GColorJazzberryJam":"0xAA0055","GColorPurple":"0xAA00AA","GColorVividViolet":"0xAA00FF","GColorWindsorTan":"0xAA5500","GColorRoseVale":"0xAA5555","GColorPurpureus":"0xAA55AA","GColorLavenderIndigo":"0xAA55FF","GColorLimerick":"0xAAAA00","GColorBrass":"0xAAAA55","GColorLightGray":"0xAAAAAA","GColorBabyBlueEyes":"0xAAAAFF","GColorSpringBud":"0xAAFF00","GColorInchworm":"0xAAFF55","GColorMintGreen":"0xAAFFAA","GColorCeleste":"0xAAFFFF","GColorRed":"0xFF0000","GColorFolly":"0xFF0055","GColorFashionMagenta":"0xFF00AA","GColorMagenta":"0xFF00FF","GColorOrange":"0xFF5500","GColorSunsetOrange":"0xFF5555","GColorBrilliantRose":"0xFF55AA","GColorShockingPink":"0xFF55FF","GColorChromeYellow":"0xFFAA00","GColorRajah":"0xFFAA55","GColorMelon":"0xFFAAAA","GColorRichBrilliantLavender":"0xFFAAFF","GColorYellow":"0xFFFF00","GColorIcterine":"0xFFFF55","GColorPastelYellow":"0xFFFFAA","GColorWhite":"0xFFFFFF"}
		return mapping[text]
	try:
		# convert the hex value to the nearest pebble color
		color = int(text, 0)
		r,g,b,a = nearest_color_to_pebble64_palette((color >> 16) & 0xFF, (color >> 8) & 0xFF, (color >> 0) & 0xFF, 0xFF)
		text = "0x%0.2x%0.2x%0.2x" % (r,g,b)
	except ValueError:
		raise Exception('Unknow color format for %s' % text)
	return text;

filters = {'max' : max, 'cvarname' : cvarname, 'embed_html' : embed_html, 'minify_css' : minify_css, 'minify_js': minify_js, 'gcolor_to_hex': gcolor_to_hex}

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
	jinjapath = os.path.join(jinjapath, 'templates/**/*.jinja')
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
	kw['bin_type']='app'
	kw['features']='c cprogram pebble_cprogram autoconf mergejs'
	return self(*k,**kw)
