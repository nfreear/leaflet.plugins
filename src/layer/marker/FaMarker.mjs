/**
 * A Font Awesome based marker.
 */

import createMarker from './Marker.mjs';

export default function createFaMarker (L) {
  const { ButtonIcon, Marker } = createMarker(L);

  const FaMarker = Marker.extend({
    options: {
      faId: 'star',
      icon: new ButtonIcon({ className: 'leaflet-fa-icon fa-solid' })
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
