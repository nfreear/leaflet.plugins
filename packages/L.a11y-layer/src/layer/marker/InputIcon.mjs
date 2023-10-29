
export default function createIcon (L) {
  const defIcon = new L.Icon.Default();
  const OPT = defIcon.options;

  const imagePath = defIcon._detectIconPath();
  const imageUrl = (file) => imagePath + file;

  const InputIcon = L.Icon.extend({
    options: {
      iconUrl: imageUrl('marker-icon.png'),
      iconRetinaUrl: imageUrl('marker-icon-2x.png'),
      shadowUrl: imageUrl('marker-shadow.png'),
      iconSize: OPT.iconSize,
      iconAnchor: OPT.iconAnchor,
      popupAnchor: OPT.popupAnchor,
      tooltipAnchor: OPT.tooltipAnchor,
      shadowSize: OPT.shadowSize
    },

    _createImg (src, el) {
      el = el || document.createElement('input');
      el.type = 'image';
      el.src = src;
      return el;
    },

    createShadow (oldIcon) {
      const IMG = this._createIcon('shadow', oldIcon);
      IMG.tabIndex = -1;
      IMG.ariaHidden = true;
      IMG.alt = '';
      return IMG;
    }
  });

  return InputIcon;
}
