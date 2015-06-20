# Introduction #

## Who should read this ##
Anyone writing applications for the [Pebble Watch](http://getpebble.com).

## The problem ##
Apps and Watchfaces need configuration. [Pebble SDK](https://developer.getpebble.com/2/) contains all the building blocks for adding configuration. The problem is that the developer need to understand different APIs and write code in different languages to add it to their application.

## The solution ##
With Pebble Autoconfig the developer only need to configure which configurations are wanted in the well known [appinfo.json](http://developer.getpebble.com/2/guides/anatomy-of-pebble-application.html), add a few lines of C-code and upload a generated HTML file to a public web server.

That is it to have a mobile friendly interface with configuration that is automatically transferred to the Pebble Watch.

## What Pebble Autoconfig does ##
The following tasks are done automatically:

  1. Builds a mobile friendly configuration page
  1. Sets the value for all form fields with the correct value
  1. Gets the value of all form fields and returns to the Pebble JS
  1. Stores the values in the local storage of the phone
  1. Send the values to the Pebble Watch
  1. Stores the values in the local storage of the watch
  1. Provides accessors to get the value of your settings in your code

## Get started ##
Have a look at [Installation](Installation.md) and [Configuration](Configuration.md) to start using Pebble Autoconfig.

## Tested on ##
<table border='0'>
<blockquote><tr>
<blockquote><th>Phone</th>
<td>Samsung Galaxy S3</td>
<td>Sony Ericsson Active</td>
<td>Apple iPhone 3GS</td>
</blockquote></tr>
<tr>
<blockquote><th>OS</th>
<td>Android 4.4.2</td>
<td>Android 4.3.1</td>
<td>iOS 6.1.3</td>
</blockquote></tr>
<tr>
<blockquote><th>WebKit</th>
<td>537.36</td>
<td>534.30</td>
<td>536.26</td>
</blockquote></tr>
<tr>
<blockquote><th>Resolution</th>
<td>720 x 1280 px</td>
<td>320 x 480 px</td>
<td>320 x 480 px</td>
</blockquote></tr>
<tr>
<blockquote><th>Screenshot</th>
<td><a href='http://wiki.pebble-autoconfig.googlecode.com/git/images/pebble-autoconfig-android-s3_2014-03-10.png'><img src='http://wiki.pebble-autoconfig.googlecode.com/git/images/pebble-autoconfig-android-s3_2014-03-10.png' height='480'></img></a>
</td>
<td valign='top'><a href='http://wiki.pebble-autoconfig.googlecode.com/git/images/pebble-autoconfig-android-active_2014-03-10.png'><img src='http://wiki.pebble-autoconfig.googlecode.com/git/images/pebble-autoconfig-android-active_2014-03-10.png' width='270'></img></a>
</td>
<td valign='top'><a href='http://wiki.pebble-autoconfig.googlecode.com/git/images/pebble-autoconfig-iphone-3gs_2014-03-10.png'><img src='http://wiki.pebble-autoconfig.googlecode.com/git/images/pebble-autoconfig-iphone-3gs_2014-03-10.png' width='270'></img></a>
</td>
</blockquote></tr>
</table>