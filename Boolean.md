# Boolean #
A boolean is either true or false. Is is represented by a flip switch in the generated HTML file and by two radio buttons in the embedded version. The text for the on and the off value can be customized by setting on-text and off-text to new values.

## Overview ##
| **Property** | **Required** | **Type** | **Description** |
|:-------------|:-------------|:---------|:----------------|
| **name**     | yes          | string   | Must be same name as an appKey |
| **title**    | yes          | string   | Title displayed in configuration page |
| **description** | no           | string   | Description displayed in configuration page |
| **type**     | yes          | string   | Set to boolean  |
| **default**  | yes          | true or false | Default value for this property |
| **off-text** | yes          | string   | Text displayed on flip switch when in off state and value is false |
| **on-text**  | yes          | string   | Text displayed on flip switch when in on state and value is true |

## Example ##
```
{
	"name": "background",
	"title": "Background color",
	"type": "boolean",
	"off-text": "White",
	"on-text": "Black",
	"default": true
},
```

## Explainations ##

### off-text ###
Text displayed on flip switch when in off position, value false.

```
"off-text": "White",
```

### off-text ###
Text displayed on flip switch when in on position, value true.

```
"on-text": "Black",
```

### default ###
Available values are _true_ and _false_.

```
"default": true
```