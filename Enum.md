# Enum #
An enum can be one of a defined number of choices. It will be generated as a choice list in HTML.

## Overview ##
| **Property** | **Required** | **Type** | **Description** |
|:-------------|:-------------|:---------|:----------------|
| **name**     | yes          | string   | Must be same name as an appKey |
| **title**    | yes          | string   | Title displayed in configuration page |
| **description** | no           | string   | Description displayed in configuration page |
| **type**     | yes          | string   | Set to enum     |
| **choices**  | yes          | one or more key value pairs | The list of choices for this property |
| **default**  | yes          | integer  | Default index for this property |

## Example ##
```
{
	"name": "direction",
	"title": "Direction",
	"description": "Where should we head?",
	"type": "enum",
	"choices": {
		"NORTH": "North",
		"EAST": "East",
		"SOUTH": "South",
		"WEST": "West"
	},
	"default": 2
},
```

## Explainations ##

### choices ###
A dictionary with one or more key value pairs. The key is used to generate enum in header file and the value is displayed in the generated choice list.

```
"choices": {
	"NORTH": "North",
	"EAST": "East",
	"SOUTH": "South",
	"WEST": "West"
},
```

### default ###
An integer representing a zero indexed item in _choices_ list.

```
"default": 2,
```