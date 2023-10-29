/**
 * Leaflet Accessible Layers Plugin.
 */

// import createKlass from './AccessibilityPlugin.mjs';
import createMarkerIcons from './layer/marker/MyMarker.mjs';
import createFaMarker from './layer/marker/FaMarker.mjs';

export default function createA11yLayers (L, addToL = true) {
  // const Plugin = createKlass(L);
  const { ButtonIcon, InputIcon, MyMarker, setDefaultIcon } = createMarkerIcons(L);
  const FaMarker = createFaMarker(L);

  const A11yLayer = {
    // Plugin,
    ButtonIcon,
    InputIcon,
    FaMarker,
    MyMarker,
    setDefaultIcon,
    faMarker: (latlng, options) => new FaMarker(latlng, options),
    myMarker: (latlng, options) => new MyMarker(latlng, options)
  };

  if (addToL) {
    L.a11yLayer = A11yLayer;
  }

  return A11yLayer;
}
