/**
 * Leaflet Accessibility Plugin (B).
 */

import createKlass from './AccessibilityPlugin.mjs';
import createMarkerIcons from './layer/marker/Marker.mjs';
import createFaMarker from './layer/marker/FaMarker.mjs';

export default function createPlugin (L, addToL = true) {
  const Plugin = createKlass(L);
  const { ButtonIcon, InputIcon, Marker, setDefaultIcon } = createMarkerIcons(L);
  const FaMarker = createFaMarker(L);

  const A11Y = {
    Plugin,
    ButtonIcon,
    InputIcon,
    FaMarker,
    Marker,
    setDefaultIcon,
    faMarker: (latlng, options) => new FaMarker(latlng, options),
    marker: (latlng, options) => new Marker(latlng, options)
  };

  if (addToL) {
    L.a11y = A11Y;
  }

  return A11Y;
}
