import throttle from 'lodash.throttle';

class KeyboardBinder {

  constructor() {
    this.init();

    this._keyPressEvent();
  }

  init() {
    this.currentActive = null;
    this.currentLinks;
    document.addEventListener('mouseenter', function(e) {
      e.stopPropagation();
      if (typeof e.target.closest === 'function') {
        const target = e.target.closest('.keyboard-bind-wrapper');
        if (target !== null) {
          if (target !== this.currentActive) {
            this.currentActive = target;
            const links = target.querySelectorAll('.keyboard-bind-key');
            this._assignKeys(links);
          }
        }
      }

    }.bind(this), true);

    document.addEventListener('mouseleave', throttle(this.handleMouseLeave.bind(this), 200, {'leading': false}), true);

  }

  handleMouseLeave(e) {
    e.stopPropagation();
    if (typeof e.target.closest === 'function') {
      const target = e.target.closest('.keyboard-bind-wrapper');
      if (target === null) {
        this.currentActive = null;
        this.currentLinks = {};
      }
    }
  }

  _assignKeys(links) {
    this.currentLinks = {};

    links.forEach(function(ele) {
      this.currentLinks[ele.getAttribute('data-key')] = ele.getAttribute('href');
    }.bind(this));
  }

  _keyPressEvent() {
    document.addEventListener('keypress', function(e) {
      e = e || window.event;
      
      if (this.currentLinks[e.key]) {
        // window.location.href = this.currentLinks[e.key];
        window.open(this.currentLinks[e.key], '_blank');
      }

    }.bind(this));
  }


}

export default KeyboardBinder;
