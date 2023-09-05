[![Node.js CI][ci-img]][ci]

# Leaflet.a11y

An accessibility and localization/translation plugin for [Leaflet][].

Uses the [Leaflet.i18n][] internationalisation plugin.

This plugin does _NOT_ replace [accessibility][] efforts in [core Leaflet][bugs]. It is a means to provide interim fixes, and test potential fixes.

The plugin currently does 3 things:

1. Sets a `role` and `aria-label` on the Leaflet map container element (see [L-7193][]).
2. Manages keyboard focus when popups are opened and closed (see [L-8115][]).
3. Translates map controls (Zoom in, Zoom out, Close popup, ...) into a language that has been set with `setLocale` ([Leaflet.i18n][]). Mostly relevant for accessibility, as most text is hidden from visual users.

A work-in-progress!

License: [MIT][].

[ci]: https://github.com/nfreear/Leaflet.a11y/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/Leaflet.a11y/actions/workflows/node.js.yml/badge.svg
[Leaflet]: https://leafletjs.com/
[accessibility]: https://leafletjs.com/examples/accessibility/
[Leaflet.i18n]: https://github.com/umap-project/Leaflet.i18n
[MIT]: https://nfreear.mit-license.org/
[bugs]: https://github.com/Leaflet/Leaflet/labels/accessibility
[L-7193]: https://github.com/Leaflet/Leaflet/issues/7193
  "Make the leaflet-container a programmatically determinable element"
[L-8115]: https://github.com/Leaflet/Leaflet/issues/8115
  "Focus management between markers and popups"
[Maps WCAG eval]: https://github.com/Malvoz/web-maps-wcag-evaluation
