# Integer #
Integer is a whole number value. We support values according to [int32\_t](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/stdint.h.html#tag_13_47_03_02). Integer values will be represented by a text field and a slider in the HTML.

## Overview ##
| **Property** | **Required** | **Type** | **Description** |
|:-------------|:-------------|:---------|:----------------|
| **name**     | yes          | string   | Must be same name as an appKey |
| **title**    | yes          | string   | Title displayed in configuration page |
| **description** | no           | string   | Description displayed in configuration page |
| **type**     | yes          | string   | Set to integer  |
| **min**      | yes          | integer  | Minimum value for the integer |
| **max**      | yes          | integer  | Maximum value for the integer |
| **default**  | yes          | integer  | Default value   |

## Example ##
```
{
	"name": "length",
	"title": "Length",
	"description": "Between 0 and 100",
	"type": "integer",
	"min": 0,
	"max": 100,
	"default": 17
},
```

## Explainations ##
All values must be valid according to [int32\_t](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/stdint.h.html#tag_13_47_03_02).

### min ###
The lowest value allowed to be set. Must be smaller than _max_.

```
"min": 0,
```

### max ###
The maximum value allowed to be set. Must be larger than _min_.

```
"max": 100,
```

### default ###
Default value for the proporty. Must be between _min_ and _max_.

```
"default": 17,
```