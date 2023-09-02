// Following https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md

(function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

    // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
        window.L.a11y = factory(L);
    }
}(function (L) {
    const MyAccessibilityPlugin = {};

    // implement your plugin
    let mapElem;

    function initialize (MAP) {
      mapElem = MAP._container;

      mapElem.lang = L.locale; // Was: L._('_locale');

      mapElem.role = 'region';
      mapElem.ariaLabel = L._('map');
      mapElem.ariaRoleDescription = L._('map');

      _localizeControls();
      _localizeMarkers(mapElem);
      _localizePopups(MAP); // NOT 'mapElem'!

      console.debug('a11y.initialize:', mapElem, MAP);
    }

    function _localizeControls () {
      _qt('.leaflet-control-zoom-in', 'ariaLabel', 'Zoom in');
      _qt('.leaflet-control-zoom-in', 'title', 'Zoom in');

      _qt('.leaflet-control-zoom-out', 'ariaLabel', 'Zoom out');
      _qt('.leaflet-control-zoom-out', 'title', 'Zoom out');

      _qt('.leaflet-control-attribution a[href $= "leafletjs.com"]', 'title', 'A JavaScript library for interactive maps');
    }

    // Only translate the default marker ALT text, for now.
    function _localizeMarkers (MAP_EL) {
      const MARKER_PANE = MAP_EL.querySelector('.leaflet-marker-pane');

      [...MARKER_PANE.children].forEach(PIN_EL => {
        if (PIN_EL.alt === 'Marker') {
          PIN_EL.alt = L._('Marker');
          PIN_EL.title = L._('Marker');
        }
      });
    }

    function _localizePopups (MAP) {
      MAP.on('popupopen', ev => {
        ev.popup._closeButton.title = L._('Close popup');
        ev.popup._closeButton.ariaLabel = L._('Close popup');

        console.debug('a11y.popupopen:', ev);
      });
    }

    function _qt(selector, prop, str) {
      const ELEM = mapElem.querySelector(selector);
      console.assert(ELEM, `element.querySelector('${selector}')`);

      if (ELEM) {
        ELEM[prop] = L._(str);
      }
    }

    MyAccessibilityPlugin.initialize = initialize;

    // return your plugin when you are done
    return MyAccessibilityPlugin;
}, window));
