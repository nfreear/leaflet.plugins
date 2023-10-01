/**
 * Leaflet Accessibility Plugin (B).
 */

import createKlass from './AccessibilityPlugin.mjs';
import createMarkerIcons from './layer/marker/Marker.mjs';

export default function createPlugin (L, addToL = true) {
  const Plugin = createKlass(L);
  const { ButtonIcon, InputIcon, Marker, setDefaultIcon } = createMarkerIcons(L);

  const A11Y = {
    Plugin,
    ButtonIcon,
    InputIcon,
    Marker,
    setDefaultIcon,
    marker: (latlng, options) => new Marker(latlng, options)
  };

  if (addToL) {
    L.a11y = A11Y;
  }

  return A11Y;
}
