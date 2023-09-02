
# Leaflet.a11y

An accessibility and localization/translation plugin for [Leaflet.js][].

Uses the [Leaflet.i18n][] internationalisation plugin.

This plugin currently does 2 things:

1. Sets a `role` and `aria-label` on the Leaflet map container element.
2. Translates map controls (Zoom in, Zoom out, Close popup, ...) into a language set with `setLocale` ([Leaflet.i18n][]).

I'm exploring how to fit this plugin in with accessibility efforts in core [Leaflet][], for example, [giving the map container a role][bug 1793].

License: [MIT][].

[Leaflet.js]: https://leafletjs.com/
[Leaflet.i18n]: https://github.com/umap-project/Leaflet.i18n
[MIT]: https://nfreear.mit-license.org/
[bug 1793]: https://github.com/Leaflet/Leaflet/issues/7193
