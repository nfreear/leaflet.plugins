[![Node.js CI][ci-img]][ci]

# Leaflet.a11y

An accessibility and localization/translation plugin for [Leaflet][].

Uses the [Leaflet.i18n][] internationalisation plugin.

This plugin does _NOT_ replace [accessibility][] efforts in [core Leaflet][bugs]. It is a means to provide interim fixes, and test potential fixes.

The plugin currently does 3 things:

1. Sets a `role` and `aria-label` on the Leaflet map container element (see [L-7193][]).
2. Manages keyboard focus when popups are opened and closed (see [L-8115][]).
3. Translates map controls (Zoom in, Zoom out, Close popup, ...) into a language that has been set with `setLocale` ([Leaflet.i18n][]). Mostly relevant for accessibility, as most text is hidden from visual users.

More to follow!

# Usage

Include or `import` core Leaflet and the plugins:

```html
<script src="path/to/leaflet.js"></script>
<script src="path/to/Leaflet.i18n.js"></script>
<script src="path/to/Leaflet.i18n.js"></script>
```

Then, call initialize the accessibility plugin with `L.a11y.onLoad` before calling `setView`:

```js
const MAP = L.map('map')
  .whenReady(ev => L.a11y.onLoad(ev))
  // Or: .on('load', ev => L.a11y.onLoad(ev))
  .setView([51.505, -0.09], 13);

// ...
```

---
License: [MIT][].

[ci]: https://github.com/nfreear/Leaflet.a11y/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/Leaflet.a11y/actions/workflows/node.js.yml/badge.svg
[Leaflet]: https://leafletjs.com/
[accessibility]: https://leafletjs.com/examples/accessibility/
[Leaflet.i18n]: https://github.com/umap-project/Leaflet.i18n
[MIT x]: https://nfreear.mit-license.org/
[MIT]: https://github.com/nfreear/Leaflet.a11y/blob/main/LICENSE
[bugs]: https://github.com/Leaflet/Leaflet/labels/accessibility
[L-7193]: https://github.com/Leaflet/Leaflet/issues/7193
  "Make the leaflet-container a programmatically determinable element"
[L-8115]: https://github.com/Leaflet/Leaflet/issues/8115
  "Focus management between markers and popups"
[Maps WCAG eval]: https://github.com/Malvoz/web-maps-wcag-evaluation
  "Web map tools WCAG 2.1 evaluation - A manual accessibility evaluation of popular web map tools."
