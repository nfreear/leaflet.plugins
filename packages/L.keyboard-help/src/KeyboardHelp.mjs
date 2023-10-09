/**
 * A control to display help for keyboard shortcuts in a popup.
 * Click a button to launch a popup containing help for the keyboard shortcuts for core Leaflet.
 *
 * NDF, 08-October-2023
 *
 * @see https://developers.google.com/maps/documentation/javascript/overview
 * @see innerHTML | _updateContent - https://github.com/Leaflet/Leaflet/blob/main/src/layer/DivOverlay.js#L280
 */

export default function createPlugin (L, addToL = false) {
  console.assert(L && L.Class && L.Map && L.Util, 'Leaflet needed');

  class KeyboardHelp {
    constructor () {
      this._initialized = false;
    }

    get _title () { return L._('Keyboard shortcuts'); }

    get mapElem () { return this._map.getContainer(); }

    initialize (MAP) {
      console.assert(MAP && MAP._leaflet_id && MAP.getContainer && MAP.on, 'map');
      this._map = MAP;

      this._prependButtonToMap();
      this._appendTable();

      this._map.on('resize', (ev) => this._resizeHandler(ev));
      this._resizeHandler();
    }

    _clickHandler (ev) {
      ev.preventDefault();
      const POPUP = L.popup({ className: 'leaflet-keyboard-help-popup' })
        .setLatLng(this._map.getCenter())
        .setContent(`<h2>${this._title}</h2>${this._createTable()}`)
        .openOn(this._map);

      POPUP._container.setAttribute('aria-label', this._title);
      POPUP._container.setAttribute('role', 'dialog');
      POPUP._container.tabIndex = -1;
      POPUP._container.focus();

      console.debug('Keyb help click:', POPUP, ev);
    }

    _resizeHandler (ev) {
      const SIZE = this._map.getSize();
      this._btn.style = `--map-w: ${SIZE.x}px; --map-h: ${SIZE.y}px;`;
    }

    _prependButtonToMap () {
      const BTN = this._btn = document.createElement('button');

      BTN.textContent = this._title;
      BTN.className = 'leaflet-keyboard-help-button';

      BTN.addEventListener('click', (ev) => this._clickHandler(ev));

      this.mapElem.insertAdjacentElement('beforebegin', BTN);

      // console.debug('> Size:', SIZE);
    }

    _appendTable () {
      const DIV = document.createElement('div');

      DIV.innerHTML = this._createTable();
      DIV.id = 'leaflet-keyboard-help-a01';
      DIV.classList.add('visibly-hidden');

      this.mapElem.setAttribute('aria-describedby', DIV.id);
      this.mapElem.appendChild(DIV);
    }

    _createTable () {
      const rows = this._rowTexts.map((TX) => {
        return `<tr><td><kbd aria-label="${TX.alt}">${TX.sym}</kbd></td><td>${TX.text}.</td></tr>`;
      });
      return `<table>${rows.join('\n')}</table>`;
    }

    get _rowTexts () {
      return [
        { sym: '←', alt: L._('Left arrow'), text: L._('Move left') },
        { sym: '→', alt: L._('Right arrow'), text: L._('Move right') },
        { sym: '↑', alt: L._('Up arrow'), text: L._('Move up') },
        { sym: '↓', alt: L._('Down arrow'), text: L._('Move down') },
        { sym: '+', alt: '', text: L._('Zoom in') },
        { sym: '-', alt: '', text: L._('Zoom out') }
      ];
    }
  }

  L.Map.addInitHook(function () {
    const MAP = this;
    console.debug('L.Map.addInitHook:', MAP);

    if (MAP.options.keyboardHelp) {
      MAP.keyb = new KeyboardHelp();

      MAP.keyb.initialize(MAP);
    }
  });

  if (addToL) {
    L.KeyboardHelp = KeyboardHelp;
  }

  return KeyboardHelp;
}
