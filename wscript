top = '.'
out = 'build'

def options(ctx):
    ctx.load('pebble_sdk')
    ctx.load('autoconfig', tooldir='wtools')

def configure(ctx):
    ctx.load('pebble_sdk')
    ctx.load('autoconfig', tooldir='wtools')

def build(ctx):
    ctx.load('pebble_sdk')
    ctx.load('autoconfig', tooldir='wtools')

    for template in ctx.path.ant_glob(['wtools/templates/*.jinja']):
        ctx.add_manual_dependency(
            template,
            ctx.path.find_node('appinfo.json'))

    ctx.pbl_program(
        source=ctx.path.ant_glob(['src/**/*.c','wtools/**/*.jinja']),
        target='pebble-app.elf')

    ctx.pbl_bundle(elf='pebble-app.elf',
                   js=ctx.path.ant_glob('build/**/*.js'))
