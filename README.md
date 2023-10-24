[![Node.js CI][ci-img]][ci]
[![Leaflet 1.9.4][leaflet-img]][leaflet]

# Leaflet Plugins

A collection of accessibility and localisation/ translation plugins for [Leaflet][].

| Plugin               | Description                               | NPM     |
|----------------------|-------------------------------------------|---------|
|[Leaflet.a11y][]      | An accessibility and localization plugin  | [![NPM][npm-a-img]][npm-a] |
|[Leaflet.translate][] | Translations/ language packs for Leaflet core and plugins| [![NPM][npm-t-img]][npm-t] |
|[L.keyboard-help][]   | A control to display help for keyboard shortcuts  | [![NPM][npm-k-img]][npm-k] |

* See: [Changelog][]
* See: [Roadmap][]
* Demo: [nfreear.github.io/leaflet.plugins][demo]

## Aim

This plugin does _NOT_ replace [accessibility][] efforts in [core Leaflet][bugs]. It is a means to provide interim fixes, and potentially to test fixes.

The aim for this plugin is for it to become obsolete and to retire it, because sufficient accessibility fixes and enhancements have been made to core Leaflet. For more see [#14][].

## What is “A11y“?

“A11y“ is a numeronym – an abbreviation for accessibility. It is often pronounced “alley“ (see [#10][]).

## Leaflet.i18n plugin optional

If available, `Leaflet.a11y` uses the [Leaflet.i18n][] internationalisation plugin.

If the `Leaflet.i18n` plugin is not available, a shim is provided for the `L._()` translation function.

## What it does

The plugin currently does the following:

1. Set a `role` and `aria-label` on the Leaflet map container element (see [L-7193][]).
2. Manage keyboard focus when popups are opened and closed (see [L-8115][]).
3. Fix so non-interactive markers are correctly identified ([L-8116][])
4. Enable map controls (Zoom in, Zoom out, Close popup, ...) to be translated into a language that has been set with `setLocale` ([Leaflet.i18n][]). Mostly relevant for accessibility, as most text is hidden from visual users ([L-9092][]).

More to follow!

## Usage

Include or `import` core Leaflet and the plugins:

```html
<script src="path/to/leaflet.js"></script>
<script src="path/to/Leaflet.i18n.js"></script>
<script src="path/to/Leaflet.a11y.js"></script>
```

Then, simply set the `a11yPlugin` option when creating a map:

```js
var map = L.map('map', {
  a11yPlugin: true
  // ...
}).setView([51.505, -0.09], 13);

// ...
```

## Build and Test

```
npm install
npm run build
npm test
npm start
```

Feedback, contributions and pull requests are welcomed!

---
License: [MIT][].

[roadmap]: https://github.com/nfreear/leaflet.plugins/blob/main/ROADMAP.md
[changelog]: https://github.com/nfreear/leaflet.plugins/blob/main/CHANGELOG.md
[ci]: https://github.com/nfreear/leaflet.plugins/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/leaflet.plugins/actions/workflows/node.js.yml/badge.svg
[leaflet-img]: https://img.shields.io/badge/leaflet-1.9.4-green.svg?style=flat
[demo]: https://nfreear.github.io/leaflet.plugins/
[Leaflet]: https://leafletjs.com/
[accessibility]: https://leafletjs.com/examples/accessibility/
[Leaflet.i18n]: https://github.com/umap-project/Leaflet.i18n
[MIT x]: https://nfreear.mit-license.org/
[MIT]: https://github.com/nfreear/leaflet.plugins/blob/main/LICENSE
[#10]: https://github.com/nfreear/leaflet.plugins/issues/10
  "What is “a11y”? #10"
[#14]: https://github.com/nfreear/leaflet.plugins/issues/14
  "“I want to retire” #14"
[bugs]: https://github.com/Leaflet/Leaflet/labels/accessibility
[L-7193]: https://github.com/Leaflet/Leaflet/issues/7193
  "Make the leaflet-container a programmatically determinable element"
[L-8115]: https://github.com/Leaflet/Leaflet/issues/8115
  "Focus management between markers and popups"
[L-8116]: https://github.com/Leaflet/Leaflet/issues/8116
  "Discern interactive markers from non-interactive markers"
[L-9092]: https://github.com/Leaflet/Leaflet/issues/9092
  "feat: Add placeholder function for translation/localization/i18n to Leaflet"
[L-9087]: https://github.com/Leaflet/Leaflet/pull/9087
  "Add the 'Leaflet.a11y' to plugin list"
[Maps WCAG eval]: https://github.com/Malvoz/web-maps-wcag-evaluation
  "Web map tools WCAG 2.1 evaluation - A manual accessibility evaluation of popular web map tools."

[Leaflet.a11y]: https://github.com/nfreear/leaflet.a11y/tree/main/packages/leaflet.a11y
[Leaflet.translate]: https://github.com/nfreear/leaflet.a11y/tree/main/packages/Leaflet.translate
[L.keyboard-help]: https://github.com/nfreear/leaflet.a11y/tree/main/packages/L.keyboard-help

[npm-a]: https://www.npmjs.com/package/leaflet.a11y
[npm-a-img]: https://img.shields.io/npm/v/leaflet.a11y
[npm-t]: https://www.npmjs.com/package/leaflet.translate
[npm-t-img]: https://img.shields.io/npm/v/leaflet.translate
[npm-k]: https://www.npmjs.com/package/l.keyboard-help
[npm-k-img]: https://img.shields.io/npm/v/l.keyboard-help
