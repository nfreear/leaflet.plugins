[![Node.js CI][ci-img]][ci]
[![NPM][npm-img]][npm]
[![Leaflet 1.9.4][leaflet-img]][leaflet]

# Leaflet.translate #

A localization/ translation plugin for [Leaflet][] and [Leaflet plugins][].

The plugin contains both translations/ language pack files, and the code to load them.

It uses the [Leaflet.i18n][] internationalisation plugin.

* Demo: [nfreear.github.io/leaflet.a11y][demo]
* See: [Leaflet/Leaflet/issues/9092][L-9092]

Also, fix accessibility issues with [Leaflet.a11y][].

## Usage

Include or `import` core Leaflet and the plugins:

```html
<script src="path/to/leaflet.js"></script>
<script src="path/to/Leaflet.i18n.js"></script>
<script src="path/to/Leaflet.translate.js"></script>
```

Then, call `L.translate.load()` and use the `L._` translation function:

```js
// Load language pack, based on URL parameter ('?lang=fr').
await L.translate.fromUrl.load();
// Or: await L.translate.load('fr');

var map = L.map('map').setView([51.505, -0.09], 13);

// ...

L.marker([51.5, -0.09], {
  alt: L._('Marker: {name}', { name: 'Sterry Street …' })
})
  .addTo(MAP)
  .bindPopup(L._('Hello! I’m a translation test.'));
```

## Build and Test

```
npm install
npm run build
npm test
npm start
```

[Feedback][], translations, contributions and pull requests are welcome!

---
License: [MIT][].

[ci]: https://github.com/nfreear/Leaflet.translate/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/Leaflet.translate/actions/workflows/node.js.yml/badge.svg
[npm]: https://www.npmjs.com/package/leaflet.translate
[npm-img]: https://img.shields.io/npm/v/leaflet.translate
[leaflet-img]: https://img.shields.io/badge/leaflet-1.9.4-green.svg?style=flat
[feedback]: https://github.com/nfreear/Leaflet.translate/issues
[demo]: https://nfreear.github.io/leaflet.a11y/
[Leaflet]: https://leafletjs.com/
[Leaflet plugins]: https://leafletjs.com/plugins.html
[L-9092]: https://github.com/Leaflet/Leaflet/issues/9092
  "Add placeholder function for translation/localization/i18n to Leaflet #9092"
[Leaflet.i18n]: https://github.com/umap-project/Leaflet.i18n
[Leaflet.a11y]: https://github.com/nfreear/leaflet.a11y
  "An accessibility plugin for Leaflet"
[MIT]: https://nfreear.mit-license.org/
