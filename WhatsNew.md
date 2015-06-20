# What is new? #

## 1.1.2 ##
**2014-03-17**
### Bugfixes ###
  * Storage: Read configuration from correct local storage key when opening configuration in hosted mode

## 1.1.1 ##
**2014-03-10**

### Bugfixes ###
  * Integer: Handle no integers in configuration

## 1.1.0 ##
**2014-03-10**

### Added ###
  * Embedded mode
  * Merges Pebble Autoconfig JavaScript with your JavaScript
  * Description on page and fields

### Changes ###
  * Replaced jQuery and jQuery mobile with pure JavaScript and CSS
  * Current settings are sent from phone to page, so there should not be any issues with them being out of sync
  * Name of generated HTML file changed to autoconfig.html
  * Dependencies updated
Install with:
```
pip install -r requirements.txt
```

### Bugfixes ###
  * String: No pattern fixed
  * Enum: Display value, not key

## 1.0.0 ##
**2014-02-20**

First official release.