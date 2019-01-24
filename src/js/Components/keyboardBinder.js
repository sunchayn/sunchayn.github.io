/**
 * KeyboardBinder
 *
 * This class is responsible for enabling the Keyboard experience
 */

import throttle from 'lodash.throttle';

class KeyboardBinder {

  constructor() {
    // Initilaize the system
    this.init();

    // handle the keyboard events
    this._keyPressEvent();
  }

  init() {
    // Determine which bindable block is currently active
    this.currentActive = null;

    // Store the currently active links
    this.currentLinks = {};

    // Whenever the user hover a bindable block, we have to update the current links and bind the events
    document.addEventListener('mouseenter', function(e) {
      e.stopPropagation();
    
      if (typeof e.target.closest === 'function') {
        const target = e.target.closest('.keyboard-bind-wrapper');
        if (target !== null) {
          if (target !== this.currentActive) {
            this.currentActive = target;
            const links = target.querySelectorAll('.keyboard-bind-key');
            // Transform the binding information into an array
            this._assignKeys(links);
          }
        }
      }

    }.bind(this), true);

    // Remove the binding whenever the user leave the current block
    document.addEventListener('mouseleave', throttle(this.handleMouseLeave.bind(this), 200, {'leading': false}), true);

  }

  /**
   *  Reset the binding information
   */
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

  /**
   *  Transform the binding information into an array
   */
  _assignKeys(links) {
    this.currentLinks = {};

    links.forEach(function(ele) {
      this.currentLinks[ele.getAttribute('data-key')] = ele.getAttribute('href');
    }.bind(this));
  }

  /**
   * Handle the keypress behaviour
   */
  _keyPressEvent() {
    document.addEventListener('keypress', function(e) {
      e = e || window.event;
      
      if (this.currentLinks[e.key]) {
        window.open(this.currentLinks[e.key], '_blank');
      }

    }.bind(this));
  }


}

export default KeyboardBinder;
