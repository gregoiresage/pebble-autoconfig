# String #
A string is an array of characters. Is represented by a text field validated by regex in the HTML.

## Overview ##
| **Property** | **Required** | **Type** | **Description** |
|:-------------|:-------------|:---------|:----------------|
| **name**     | yes          | string   | Must be same name as an appKey |
| **title**    | yes          | string   | Title displayed in configuration page |
| **description** | no           | string   | Description displayed in configuration page |
| **type**     | yes          | string   | Set to string   |
| **pattern**  | yes          | string   | Regex for the string validation |
| **max-length** | yes          | integer  | Maximum length of the string (maximum 116) |
| **default**  | yes          | string   | Default index for this property |

## Example ##
```
{
	"name": "ipaddress",
	"title": "IP address",
	"type": "string",
	"pattern": "^[0-9]{1,3}(\\.[0-9]{1,3}){3}$",
	"max-length": 15,
	"default": "127.0.0.1"
},
```

## Explainations ##

### pattern ###
A regex pattern that the entered text will be validated against before the input is accepted.

```
"pattern": "^[0-9]{1,3}(\\.[0-9]{1,3}){3}$",
```

### max-length ###
Maximum length allowed to be entered and stored. Must be 116 or less because limit of [App Message size](http://developer.getpebble.com/2/api-reference/group___app_message.html#ga8a213339bca4388cf17c3f4c4b2e11fd). Might be updated in the future. Will be used for length of character array and to limit the number of letters entered in text field.

```
"max-length": 15,
```

### default ###
A string value with maximum length of value is set in _max-length_.

```
"default": "127.0.0.1",
```