[![Node.js CI][ci-img]][ci]
[![NPM][npm-img]][npm]

# Leaflet.a11y

An accessibility and localization/translation plugin for [Leaflet][].

Uses the [Leaflet.i18n][] internationalisation plugin.

## Aim

This plugin does _NOT_ replace [accessibility][] efforts in [core Leaflet][bugs]. It is a means to provide interim fixes, and potentially test fixes.

The aim of this plugin is for accessibility fixes and enhancements to be made to core Leaflet, so that the plugin becomes obsolete.

## What it does

The plugin currently does the following:

1. Set a `role` and `aria-label` on the Leaflet map container element (see [L-7193][]).
2. Manage keyboard focus when popups are opened and closed (see [L-8115][]).
3. Fix so non-interactive markers are correctly identified ([L-8116][])
4. Enable map controls (Zoom in, Zoom out, Close popup, ...) to be translated into a language that has been set with `setLocale` ([Leaflet.i18n][]). Mostly relevant for accessibility, as most text is hidden from visual users ([L-9092]).

More to follow!

* Demo: [nfreear.github.io/leaflet.a11y][demo]

# Usage

Include or `import` core Leaflet and the plugins:

```html
<script src="path/to/leaflet.js"></script>
<script src="path/to/Leaflet.i18n.js"></script>
<script src="path/to/Leaflet.a11y.js"></script>
```

Then, initialize the accessibility plugin with `L.a11y.onLoad` before calling `setView`:

```js
const MAP = L.map('map')
  .whenReady(ev => L.a11y.onLoad(ev))
  // Or: .on('load', ev => L.a11y.onLoad(ev))
  .setView([51.505, -0.09], 13);

// ...
```

---
License: [MIT][].

[ci]: https://github.com/nfreear/leaflet.a11y/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/leaflet.a11y/actions/workflows/node.js.yml/badge.svg
[npm]: https://www.npmjs.com/package/leaflet.a11y
[npm-img]: https://img.shields.io/npm/v/leaflet.a11y
[demo]: https://nfreear.github.io/leaflet.a11y/
[Leaflet]: https://leafletjs.com/
[accessibility]: https://leafletjs.com/examples/accessibility/
[Leaflet.i18n]: https://github.com/umap-project/Leaflet.i18n
[MIT x]: https://nfreear.mit-license.org/
[MIT]: https://github.com/nfreear/leaflet.a11y/blob/main/LICENSE
[bugs]: https://github.com/Leaflet/Leaflet/labels/accessibility
[L-7193]: https://github.com/Leaflet/Leaflet/issues/7193
  "Make the leaflet-container a programmatically determinable element"
[L-8115]: https://github.com/Leaflet/Leaflet/issues/8115
  "Focus management between markers and popups"
[L-8116]: https://github.com/Leaflet/Leaflet/issues/8116
  "Discern interactive markers from non-interactive markers"
[L-9092]: https://github.com/Leaflet/Leaflet/issues/9092
  "feat: Add placeholder function for translation/localization/i18n to Leaflet"
[Maps WCAG eval]: https://github.com/Malvoz/web-maps-wcag-evaluation
  "Web map tools WCAG 2.1 evaluation - A manual accessibility evaluation of popular web map tools."
