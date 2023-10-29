/**
 * A Font Awesome based marker.
 */

import createMarker from './MyMarker.mjs';

export default function createFaMarker (L) {
  const { ButtonIcon, MyMarker } = createMarker(L);

  const FaMarker = MyMarker.extend({
    options: {
      faId: 'star',
      icon: new ButtonIcon({ className: 'leaflet-fa-icon fa fa-lg' }) // Was: 'fa-solid'
    },

    _getAltText () {
      return this.options.alt || L._(this.options.faId);
    },

    _setClassName () {
      this._icon.classList.add(`fa-${this.options.faId}`);
    }
  });

  return FaMarker;
}
