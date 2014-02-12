top = '.'
out = 'build'

def options(ctx):
    ctx.load('pebble_sdk')
    ctx.load('autoconfig', tooldir='pebble-autoconfig/wtools')

def configure(ctx):
    ctx.load('pebble_sdk')
    ctx.load('autoconfig', tooldir='pebble-autoconfig/wtools')

def build(ctx):
    ctx.load('pebble_sdk')
    ctx.load('autoconfig', tooldir='pebble-autoconfig/wtools')

    ctx.pbl_autoconfprogram(
        source=ctx.path.ant_glob(['src/**/*.c']),
        target='pebble-app.elf')
        
    ctx.pbl_bundle(elf='pebble-app.elf', js='pebble-js-app.js')
