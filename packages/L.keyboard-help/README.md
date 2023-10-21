[![Node.js CI][ci-img]][ci]
[![NPM][npm-img]][npm]
[![Leaflet 1.9.4][leaflet-img]][leaflet]

# L.keyboard-help #

A control to display help for keyboard shortcuts in a popup, on a [Leaflet][] map.

* See: [Changelog][]
* Related issue: [L-9131][]
* Demo: [nfreear.github.io/leaflet.a11y][demo]

![Screenshot 1: the "Keyboard shortcuts" button][img:kb-help-1]

![Screenshot 2: the "Keyboard shortcuts" dialog, and DOM][img:kb-help-2]

## Focus order

A note on [focus order][] — the “Keyboard shortcuts” button appears before the map container in the focus order, but visually appears at the bottom-right of the map, next to the “Leaflet” attribution link. This deliberate, but there’s room for improvement!

## Usage

Include or `import` core Leaflet, the plugin and plugin stylesheet:

```html
<link href="path/to/leaflet.css" rel="stylesheet">
<link href="path/to/L.keyboard-help.css" rel="stylesheet">

…

<script src="path/to/leaflet.js"></script>
<script src="path/to/L.keyboard-help.js"></script>
```

Then, set the `keyboardHelp` option when creating a map:

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
[img:kb-help-2]: /example/images/keyboard-help_2-dialog.jpg
[roadmap]: https://github.com/nfreear/leaflet.a11y/blob/main/ROADMAP.md
[changelog]: https://github.com/nfreear/leaflet.a11y/blob/main/CHANGELOG.md
[ci]: https://github.com/nfreear/leaflet.a11y/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/leaflet.a11y/actions/workflows/node.js.yml/badge.svg
[npm]: https://www.npmjs.com/package/l.keyboard-help
[npm-img]: https://img.shields.io/npm/v/l.keyboard-help
[leaflet-img]: https://img.shields.io/badge/leaflet-1.9.4-green.svg?style=flat
[demo]: https://nfreear.github.io/leaflet.a11y/
[Leaflet]: https://leafletjs.com/
[L-9131]: https://github.com/Leaflet/Leaflet/issues/9131
  "Help should be provided for the map container keyboard shortcuts [a11y]"
[accessibility]: https://leafletjs.com/examples/accessibility/
[MIT]: https://github.com/nfreear/leaflet.a11y/blob/main/LICENSE
[feedback]: https://github.com/nfreear/leaflet.a11y/issues
[focus order]: https://www.w3.org/TR/WCAG22/#focus-order
  "WCAG 2.2 - Success Criterion 2.4.3 Focus Order"
