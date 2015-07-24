# App Info #



---


The following sections must be configured in _appinfo.json_ to enable Pebble Autoconfig:

  1. capabilities
  1. appKeys
  1. preferences

## capabilities ##
To show the Settings button when your app is selected in Pebbles phone application the capability _configurable_ must be set.

```
"capabilities": [ "configurable" ],
```

See [Showing a configuration window](http://developer.getpebble.com/2/guides/javascript-guide.html) for more information.


---


## appKeys ##
Every preference you want to add to your app need to exist both here and in the preferences section. Add the exact name of the preference followed by a unique number.

```
"appKeys": {
	"background": 0,
	"direction": 1,
	"length": 2,
	"ipaddress": 3
},
```

See [Using named keys in PebbleKit JS messages](http://developer.getpebble.com/2/guides/javascript-guide.html) for more information.


---


## preferences ##
The preference section is Pebble Autoconfig specific. All settings here will be used to control how preferences are stored and presented.

**Example**
```
"preferences": {
	"embedded": false,
	"debug": true,
	"url": "http://wiki.pebble-autoconfig.googlecode.com/git/example/autoconfig.html",
	"description": "Use the form to configure your <strong>Pebble Watch</strong>",
	"items": [{
		"name": "length",
		"title": "Length",
		"description": "In pixels",
		"type": "integer",
		"min": 0,
		"max": 100,
		"default": 17
	},]
```

**Overview**
| **Property** | **Required** | **Type** | **Description** |
|-------------|-------------|---------|----------------|
| **embedded** | no           | boolean  | Use embedded or hosted solution |
| **debug**    | no           | boolean  | Enable debug logging in embedded mode |
| **url**      | yes          | string   | The url of the hosted configuration page |
| **description** | no           | string   | A description added to configuration page |
| **items**    | no           | array of object | An array of configuration items |


### embedded ###
If set to true a configuration page will be embedded in the JavaScript. It is using a hack that might not be supported in the future. If set to false JavaScript will not change when new settings are added so that is the prefered method to not be affected by the iOS JavaScript freeze.

URL property will be ignored if this is enabled.

```
"embedded": false,
```

### debug ###
Print some debug information, including user-agent, to JavaScript console and a div in the embedded configuration page.

```
"debug": true,
```

### url ###
When a project with Pebble Autoconfig enabled is built, a HTML file with the name _index.html_ will be generated. The file contains UI and code to display and send configuration to the Pebble Watch.

This file must be uploaded to a public host of your choice. Set the url property to the full address of this file.

```
"url": "http://wiki.pebble-autoconfig.googlecode.com/git/example/autoconfig.html",
```

### description ###
An optional field that will be displayed between header and form. HTML formatting is allowed.

```
"description": "Use the form to configure your <strong>Pebble Watch</strong>",
```

### items ###
An app can have one ore more preferences of different types. Preferences are JSON dictionaries in an array. If no item array is present the configuration page will be generated as a information page with no form.

Common for all preferences are the following which are always required:

#### Overview ####

| **Property** | **Required** | **Type** | **Description** |
|-------------|-------------|---------|----------------|
| **name**     | yes          | string   | Must be same name as an appKey |
| **title**    | yes          | string   | Title displayed in configuration page |
| **description** | no           | string   | Description displayed in configuration page |
| **type**     | yes          | string   | boolean, enum, integer or string |

#### name ####
Name of the preference. Will be used to generate functions needed to get the value.

**Notice!** An appKey with the exact same name must exist in the appKeys section.

```
"name": "length",
```

For a preference with name _size_ the method name for getting the value will be _getSize()_.

#### title ####
Shown in the configuration page next to the input.

```
"title": "Length"
```

#### description ####
Shown between title and input.

```
"description": "In pixels"
```

#### type ####
Each preference has a type which translates to a variable type in C.

Type can be one of these:

  * [boolean](Boolean.md) (bool)
  * [enum](Enum.md)
  * [integer](Integer.md) (int32\_t)
  * [string](String.md) (char[.md](.md))

```
"type": "integer",
```

#### default ####
If an application is started for the first time or if configuration has been lost every preference will be set to a default value configured here.

The format of the default value is dependant on the preference type. See the preference type page for valid values.
