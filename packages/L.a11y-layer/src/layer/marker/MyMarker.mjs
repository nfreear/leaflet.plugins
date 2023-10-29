
import createBtnIcon from './ButtonIcon.mjs';
import createInpIcon from './InputIcon.mjs';

export default function createMarker (L) {
  const ButtonIcon = createBtnIcon(L);
  const InputIcon = createInpIcon(L);

  let defaultIconKlass = InputIcon;

  function setDefaultIcon (iconKlass) {
    defaultIconKlass = iconKlass;
  }

  // class MyMarker extends L.Marker {
  const MyMarker = L.Marker.extend({
    options: {
      icon: new defaultIconKlass() /* eslint-disable-line new-cap */
    },

    _getAltText () {
      return this.options.alt || L._('Marker');
    },

    _setClassName () { /* No-op */ },

    onAdd (map) {
      this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

      if (this._zoomAnimated) {
        map.on('zoomanim', this._animateZoom, this);
      }

      this._initIcon();

      if (this._icon.tagName === 'INPUT' || this._icon.tagName === 'IMG') {
        this._icon.alt = this._getAltText();
      } else {
        this._icon.setAttribute('aria-label', this._getAltText());
      }
      this._setClassName();

      if (this.options.keyboard) {
        this._icon.tabIndex = undefined;
        this._icon.role = undefined;
      } else {
        this._icon.role = 'img';
        this._icon.tabIndex = -1;
      }

      this._icon.addEventListener('click', (ev) => console.debug('click:', ev));

      this.update();
    }
  });

  return { ButtonIcon, InputIcon, MyMarker, setDefaultIcon };
}
