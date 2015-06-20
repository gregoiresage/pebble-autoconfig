# Installation #
Installation can be done in two ways. Manually and using Git. The advantage of using Git is that Pebble Autoconfigs code can easily be updated whenever an update is released.

## Manually ##
  1. Install [jinja2](http://jinja.pocoo.org/docs/intro/), [jsmin](https://pypi.python.org/pypi/jsmin/) and [cssmin](https://pypi.python.org/pypi/cssmin/0.2.0) for code generation
```
pip install -r requirements.txt 
```
  1. Download the latest release of [Pebble Autoconfig](https://pebble-autoconfig.googlecode.com/archive/master.zip)
  1. Extract Pebble Autoconfig to a temporary folder
  1. Remove the wsript and pebble-js-app.js file from your project
  1. Copy the wtools folder and wscript file from the temporary directory to your project directory
  1. Modify your [appinfo.json](Configuration#App_Info.md)
  1. Modify your [main.c](Configuration#Main.md)
  1. Build your project
  1. If not using embedded mode, host autoconfig.html online
  1. From Pebble on your phone, select your app and click Settings
  1. Enjoy Pebble Autoconfig

## Using Git ##
  1. Install [jinja2](http://jinja.pocoo.org/docs/intro/), [jsmin](https://pypi.python.org/pypi/jsmin/) and [cssmin](https://pypi.python.org/pypi/cssmin/0.2.0) for code generation
```
pip install -r requirements.txt 
```
  1. Remove the wsript and pebble-js-app.js file from your project
  1. Open your project directory from a console window
  1. Add Pebble Autoconfig to your project as a submodule:
```
git submodule add http://code.google.com/p/pebble-autoconfig
```
  1. Link of copy wscript from pebble-autoconfig directory to your projects directory:
```
ln -s pebble-autoconfig/wscript-submodule wscript
  or
cp pebble-autoconfig/wscript-submodule wscript
```
  1. Modify your [appinfo.json](Configuration#App_Info.md)
  1. Modify your [main.c](Configuration#Main.md)
  1. Build your project
  1. If not using embedded mode, host autoconfig.html online
  1. From Pebble on your phone, select your app and click Settings
  1. Enjoy Pebble Autoconfig

# Update #
Update of Pebble Autoconfig is depending on how it was installed in the project.
## Manually ##
  1. Download the latest release of [Pebble Autoconfig](https://pebble-autoconfig.googlecode.com/archive/master.zip)
  1. Extract Pebble Autoconfig to a temporary folder
  1. Remove the wtools folder from your project
  1. Copy the wtools folder from the temporary directory to your project directory

## Using Git ##
  1. Run Git Pull from the pebble-autoconfig directory
```
git pull
```