/**
 * Leaflet Accessibility Plugin.
 */

export default function accessibilityPlugin (L) {
  /**
   * L._: Translation function, or a dummy/placeholder.
   */
  L._ = L._ || ((str) => str);

  class AccessibilityPlugin {
    constructor (MAP) {
      console.assert(MAP && MAP._leaflet_id && MAP.getContainer && MAP.on);
      // this._leaflet = L;
      this._map = MAP;
      this._initialized = false;
    }

    // get L () { return this._leaflet; }
    get map () { return this._map; }
    get mapElem () { return this._map.getContainer(); }

    /** Load: was "onLoad(event)"
     */
    load () {
      // console.assert(ev && ev.type && ev.target && ev.target.on);
      let layer = 0;
      // const MAP = this._map = ev.target;
      this.map.on('layeradd', (ev) => {
        // Initialize after the tile layer is added.
        if (layer === 1) {
          this.initialize();
        }
        layer++;
      });

      this._fixMarkers();
    }

    initialize () {
      // console.assert(MAP && MAP._leaflet_id && MAP.getContainer);
      if (this._initialized) return;
      this._initialized = true;

      this.mapElem.lang = L.locale || '';

      this._localizeControls();
      this._localizePopups(); // NOT 'mapElem'!

      this._fixMapContainer();
      this._managePopupFocus();

      console.debug('a11y.initialize:', this.mapElem, this.map);
    }

    /** Translate default controls - Zoom in/out, Attribution.
     */
    _localizeControls () {
      this._qt('.leaflet-control-zoom-in', 'ariaLabel', L._('Zoom in')); // src/control/Control.Zoom.js#L30
      this._qt('.leaflet-control-zoom-in', 'title', L._('Zoom in'));

      this._qt('.leaflet-control-zoom-out', 'ariaLabel', L._('Zoom out'));
      this._qt('.leaflet-control-zoom-out', 'title', L._('Zoom out'));

      this._qt('.leaflet-control-attribution a[href $= "leafletjs.com"]', 'title', L._('A JavaScript library for interactive maps'));
    }

    /** Only translate the default marker ALT text, for now.
     * @see https://github.com/Leaflet/Leaflet/blob/main/src/layer/marker/Marker.js#L49
     */
    _localizeMarker (PIN_EL) {
      // const MARKER_PANE = MAP.getPane('markerPane'); // Was: MAP_EL.querySelector('.leaflet-marker-pane');

      // [...MARKER_PANE.children].forEach(PIN_EL => {
      if (PIN_EL.alt === 'Marker') {
        PIN_EL.alt = L._('Marker');
        PIN_EL.title = L._('Marker');
      }
      // });

      // console.debug('localizeMarkers:', MARKER_PANE.children);
    }

    _localizePopups () {
      this.map.on('popupopen', ev => {
        ev.popup._closeButton.title = L._('Close popup'); // src/layer/Popup.js#L102
        ev.popup._closeButton.ariaLabel = L._('Close popup');

        console.debug('a11y.popupopen:', ev);
      });
    }

    /**
     * Set a role and role on the map container.
     * @see GH Issue: Leaflet/Leaflet/issues/7193.
     * @see SC 4.1.2: https://w3.org/TR/WCAG21/#name-role-value
     */
    _fixMapContainer () {
      if (!this.mapElem.role) this.mapElem.role = 'region';
      if (!this.mapElem.ariaLabel) this.mapElem.ariaLabel = L._('map');
      this.mapElem.ariaRoleDescription = L._('map');
    }

    /**
     * Fix for non-interactive markers.
     * @see GH Issue: Leaflet/Leaflet/issues/8116
     */
    _fixMarkers (MAP) {
      let layerIdx = 0;
      this.map.on('layeradd', ev => {
      // const isMarker = ev.layer._icon;
        const markerEl = ev.layer._icon || null;
        const isInteractive = (markerEl && markerEl.classList.contains('leaflet-interactive')) || false;

        if (markerEl && !isInteractive) {
          markerEl.tabIndex = -1;
          markerEl.role = undefined;
          markerEl.classList.add('x-static-marker');
        }
        if (markerEl) {
          this._localizeMarker(markerEl);
        }
        console.debug('a11y.layeradd', layerIdx, isInteractive, markerEl, ev);
        layerIdx++;
      });
    }

    /**
     * Move keyboard focus when a popup is opened and closed.
     * @see GH Issue: Leaflet/Leaflet/issues/8115 (also: #8113, #8114)
     * @see SC 2.4.3: https://w3.org/TR/WCAG21/#focus-order
     */
    _managePopupFocus (MAP) {
      this.map.on('popupopen', (ev) => {
        ev.popup._container.role = 'dialog'; // Not modal!
        ev.popup._container.tabIndex = -1;

        const SOURCE = ev.popup._source;
        if (SOURCE) {
          SOURCE._icon.ariaExpanded = true;
          // Only set focus when opened by a trigger element.
          ev.popup._container.focus(); // Was: ev.popup._closeButton.focus();
        }
      });

      this.map.on('popupclose', (ev) => {
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
    _qt (selector, property, str) {
      const ELEM = this.mapElem.querySelector(selector);
      console.assert(ELEM, `element.querySelector('${selector}')`);

      if (ELEM) {
        ELEM[property] = str;
      }
    }
  } // End: class.

  /**
   * L.Map.addInitHook
   * Param needs to be a "function" (not an arrow function), so that "this" is correct!
   */
  L.Map.addInitHook(function () {
    const MAP = this;
    console.debug('L.Map.addInitHook:', MAP);

    if (MAP.options.accessibilityPlugin || MAP.options.a11yPlugin) {
      MAP.a11y = new AccessibilityPlugin(this);

      MAP.a11y.load();
    }
  });

  L.A11yPlugin = AccessibilityPlugin;

  return AccessibilityPlugin;
} // End: function.
