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
        // factory(L);
    }
}(function (L) {
    const MyAccessibilityPlugin = {};

    // implement your plugin

    function initialize (MAP) {
      const mapElem = MAP._container;

      mapElem.role = 'region';
      mapElem.ariaLabel = L._('map');
      mapElem.ariaRoleDescription = L._('map');

      _localizeControls(mapElem);
      _localizeMarkers(mapElem);
      _localizePopups(MAP); // Not 'MAP_EL'!

      console.debug('a11y.initialize:', mapElem, MAP);
    }

    function _localizeControls (MAP_EL) {
      const MAP_CONTROLS = MAP_EL.querySelector('.leaflet-control-container');

      const ZOOM_IN = MAP_CONTROLS.querySelector('.leaflet-control-zoom-in');
      const ZOOM_OUT = MAP_CONTROLS.querySelector('.leaflet-control-zoom-out');

      const ATTR_LINK = MAP_CONTROLS.querySelector('.leaflet-control-attribution a[href *= "leafletjs.com"]');

      ZOOM_IN.ariaLabel = L._('Zoom in');
      ZOOM_IN.title = L._('Zoom in');

      ZOOM_OUT.ariaLabel = L._('Zoom out');
      ZOOM_OUT.title = L._('Zoom out');

      ATTR_LINK.title = L._('A JavaScript library for interactive maps');
    }

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

    MyAccessibilityPlugin.initialize = initialize;

    // return your plugin when you are done
    return MyAccessibilityPlugin;
}, window));
