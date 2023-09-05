// Following https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md

(function (factory, window) {
  // define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
    define(['leaflet'], factory); // eslint-disable-line no-undef

    // define a Common JS module that relies on 'leaflet'
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  }

  // attach your plugin to the global 'L' variable
  if (typeof window !== 'undefined' && window.L) {
    window.L.a11y = factory(L); // eslint-disable-line no-undef
  }
}(function (L) {
  const MyAccessibilityPlugin = { onLoad, initialize, _qt };

  // implement your plugin
  let mapElem;
  let _initialized = false;

  function onLoad (ev) {
    console.assert(ev && ev.type && ev.target && ev.target.on);
    let layer = 0;
    const MAP = ev.target;
    MAP.on('layeradd', ev => {
      // Initialize after the tile layer is added.
      if (layer === 1) {
        initialize(MAP);
      }
      layer++;
    });
  }

  function initialize (MAP) {
    console.assert(MAP && MAP._leaflet_id && MAP.getContainer);
    if (_initialized) return;
    _initialized = true;

    mapElem = MAP.getContainer(); // Was: MAP._container;

    mapElem.lang = L.locale; // Was: L._('_locale');

    _localizeControls();
    _localizeMarkers(MAP);
    _localizePopups(MAP); // NOT 'mapElem'!

    _fixMapContainer();
    _managePopupFocus(MAP);

    console.debug('a11y.initialize:', mapElem, [mapElem], MAP.getPanes(), MAP);
  }

  /** Translate default controls - Zoom in/out, Attribution.
   */
  function _localizeControls () {
    _qt('.leaflet-control-zoom-in', 'ariaLabel', 'Zoom in');
    _qt('.leaflet-control-zoom-in', 'title', 'Zoom in');

    _qt('.leaflet-control-zoom-out', 'ariaLabel', 'Zoom out');
    _qt('.leaflet-control-zoom-out', 'title', 'Zoom out');

    _qt('.leaflet-control-attribution a[href $= "leafletjs.com"]', 'title', 'A JavaScript library for interactive maps');
  }

  /** Only translate the default marker ALT text, for now.
   */
  function _localizeMarkers (MAP) {
    const MARKER_PANE = MAP.getPane('markerPane'); // Was: MAP_EL.querySelector('.leaflet-marker-pane');

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

  /**
   * Set a role and role on the map container.
   * @see GH Issue: Leaflet/Leaflet/issues/7193.
   * @see SC 4.1.2: https://w3.org/TR/WCAG21/#name-role-value
   */
  function _fixMapContainer () {
    if (!mapElem.role) mapElem.role = 'region';
    if (!mapElem.ariaLabel) mapElem.ariaLabel = L._('map');
    mapElem.ariaRoleDescription = L._('map');
  }

  /**
   * Move keyboard focus when a popup is opened and closed.
   * @see GH Issue: Leaflet/Leaflet/issues/8115 (also: #8113, #8114)
   * @see SC 2.4.3: https://w3.org/TR/WCAG21/#focus-order
   */
  function _managePopupFocus (MAP) {
    MAP.on('popupopen', (ev) => {
      ev.popup._container.role = 'dialog'; // Not modal!
      ev.popup._container.setAttribute('tabindex', '-1');
      ev.popup._container.focus(); // Was: ev.popup._closeButton.focus();

      const SOURCE = ev.popup._source;
      if (SOURCE) {
        SOURCE._icon.ariaExpanded = 'true';
      }
    });

    MAP.on('popupclose', (ev) => {
      // Find the marker or element that triggered the popup.
      const SOURCE = ev.popup._source;
      if (SOURCE) {
        SOURCE._icon.focus();
        SOURCE._icon.ariaExpanded = 'false';
      }

      console.debug('a11y.popupclose (F):', SOURCE, ev);
    });
  }

  /** _qt: Find element within map container, and set a property on it, translated with '_()' (i18n plugin).
   */
  function _qt (selector, property, str) {
    const ELEM = mapElem.querySelector(selector);
    console.assert(ELEM, `element.querySelector('${selector}')`);

    if (ELEM) {
      ELEM[property] = L._(str);
    }
  }

  // return your plugin when you are done
  return MyAccessibilityPlugin;
}, window));
