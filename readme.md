# Backbone API : Youtube

A simple way to interact with Youtube's GData API using Backbone.js objects.

## Install

```
bower install backbone.api.youtube
```

## Dependencies

_none_

## Usage

The plugin will try to create a global namespace ```Youtube``` that will host all the Models/Views/Collections mirrored from Backbone.API.Youtube

Most Backbone.js conventions apply using the _Youtube_ namespace.

```
var video = new Youtube.Models.Video({ id : "2R4563FGs2" });
```


## Credits

Created by Makis Tracend ( [@tracend](http://github.com/tracend) )

Originally used for [Tabtube](https://apps.facebook.com/tabtube)

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)

