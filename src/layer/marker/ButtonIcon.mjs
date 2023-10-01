
const { Element, point } = window;

export default function createIcon (L) {
  const ButtonIcon = L.Icon.extend({
    options: {
      // @section
      // @aka DivIcon options
      iconSize: [12, 12], // also can be set through CSS

      // iconAnchor: (Point),
      // popupAnchor: (Point),

      // @option html: String|HTMLElement = ''
      // Custom HTML code to put inside the div element, empty by default. Alternatively,
      // an instance of `HTMLElement`.
      html: false,

      // @option bgPos: Point = [0, 0]
      // Optional relative position of the background, in pixels
      bgPos: null,

      className: 'leaflet-btn-icon'
    },

    createIcon (oldIcon) {
      const div = (oldIcon && oldIcon.tagName === 'BUTTON') ? oldIcon : document.createElement('button');
      const options = this.options;

      if (options.html instanceof Element) {
        div.replaceChildren();
        div.appendChild(options.html);
      } else {
        div.innerHTML = options.html !== false ? options.html : '';
      }

      if (options.bgPos) {
        const bgPos = point(options.bgPos);
        div.style.backgroundPosition = `${-bgPos.x}px ${-bgPos.y}px`;
      }
      this._setIconStyles(div, 'icon');

      return div;
    },

    createShadow () {
      return null;
    }
  });

  return ButtonIcon;
}
