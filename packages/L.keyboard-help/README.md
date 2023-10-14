[![Node.js CI][ci-img]][ci]
[![NPM][npm-img]][npm]
[![Leaflet 1.9.4][leaflet-img]][leaflet]

# L.keyboard-help #

A control to display help for keyboard shortcuts in a popup, on a [Leaflet][] map.

* See: [Changelog][]
* Demo: [nfreear.github.io/leaflet.a11y][demo]

![Screenshot 1: the "Keyboard shortcuts" button][img:kb-help-1]

## Usage

Include or `import` core Leaflet, the plugin and plugin stylesheet:

```html
<link href="path/to/L.keyboard-help.css" rel="stylesheet">

<script src="path/to/leaflet.js"></script>
<script src="path/to/L.keyboard-help.js"></script>
```

Then, simply set the `keyboardHelp` option when creating a map:

```js
var map = L.map('map', {
  keyboardHelp: true
  // ...
}).setView([51.505, -0.09], 13);

// ...
```

[Feedback][], contributions and pull requests are welcomed!

---
License: [MIT][].

[img:kb-help-1]: /example/images/keyboard-help_1-button.jpg
[roadmap]: https://github.com/nfreear/leaflet.a11y/blob/main/ROADMAP.md
[changelog]: https://github.com/nfreear/leaflet.a11y/blob/main/CHANGELOG.md
[ci]: https://github.com/nfreear/leaflet.a11y/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/leaflet.a11y/actions/workflows/node.js.yml/badge.svg
[npm]: https://www.npmjs.com/package/l.keyboard-help
[npm-img]: https://img.shields.io/npm/v/l.keyboard-help
[leaflet-img]: https://img.shields.io/badge/leaflet-1.9.4-green.svg?style=flat
[demo]: https://nfreear.github.io/leaflet.a11y/
[Leaflet]: https://leafletjs.com/
[accessibility]: https://leafletjs.com/examples/accessibility/
[MIT]: https://github.com/nfreear/leaflet.a11y/blob/main/LICENSE
[feedback]: https://github.com/nfreear/leaflet.a11y/issues
