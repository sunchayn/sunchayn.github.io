import throttle from 'lodash.throttle';

class ScrollManager {

  constructor(BSOD, sticky, menu) {
    this.BSOD = BSOD;
    this.sticky = sticky;

    //an instance of class Menu
    this.menu = menu;

    this.title = document.getElementById('slide-title');

    this._watch();
    this._navbarLinksMapping();
  }

  _watch() {
    this.alreadyScrolled = false;
    this.working = false;

    this.slides = document.querySelectorAll('.l-slide');
    this.slidesLength = this.slides.length;
    this.lastScroll = 0;
    this._handleActiveSlide();

    this.BSODCounter = document.getElementById('BSOD-percentage');

    window.addEventListener('scroll', this._handleActiveSlide.bind(this));

    window.addEventListener('scroll', throttle(this._showBSOD.bind(this), 300, {'leading': false}));


  }

  _showBSOD() {

    if (this.working) {
      return false;
    }
    
    this.working = true;
    if (this._inViewPort(this.BSOD, 100)) {

      this.__handleBSODShow();
      this.working = false;
      return true;
    }

    if (!this._inViewPort(this.BSOD)){
      this.alreadyScrolled = false;
      this.sticky.classList.remove('sticky--hidden');
      BSOD.classList.remove( 'l-slide--blue' );
      clearInterval(this.BDOMTimerID);
    }

    this.working = false;

  }

  __handleBSODShow() {
    if (!this.alreadyScrolled) {
      BSOD.classList.add( 'l-slide--blue' );
      this.sticky.classList.add('sticky--hidden');
      if (!this.isMobileDevice()) {
        this.BSOD.scrollIntoView();
      }
      
      let percentage = 0;
      this.BSODCounter.innerHTML = percentage;
      this.BDOMTimerID = setInterval(function() {
        
        if (percentage >= 100) {
          clearInterval(this.BDOMTimerID);
          return false;
        }

        percentage += Math.floor(Math.random() * 5);
        if (percentage >= 100) {
          percentage = 100;
        }
        this.BSODCounter.innerHTML = percentage;

      }.bind(this), 30);

      this.alreadyScrolled = true;

    }

  }

  _handleActiveSlide() {
    let visibleSlides = [];
    let down = false;
    let currentScroll = window.scrollY;
    
    if (currentScroll === 0) {
      this.lastScroll = currentScroll;
      return false;
    }

    down = currentScroll >= this.lastScroll;

    for (let index = 0; index < this.slidesLength; index++) {
      let ele = this.slides[index];

        if (!this._inViewPort(ele, -100)) {
          continue;
        }

        if (Math.abs(ele.getBoundingClientRect().top < 100)) {
          this.currentSlide = ele;
          break;
        }
    }

    this.lastScroll = currentScroll;

    // if (down) {
    //   this.sticky.classList.add('navbar--collapsed');
    // }else{
    //   this.sticky.classList.remove('navbar--collapsed');
    // }

    let currentActive = document.querySelector('.navbar-item.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }

    let targetNav = document.querySelector('[data-slide=\''+ this.currentSlide.getAttribute('id') +'\']');
    if (targetNav) {
      targetNav.classList.add('active');
    }

    if (this.currentSlide.getAttribute('data-inverted')) {
      this.sticky.classList.add('sticky--inverted');
    } else if (this.sticky.classList.contains('sticky--inverted')) {
      this.sticky.classList.remove('sticky--inverted');
    }

    this.title.innerHTML = this.currentSlide.getAttribute('data-title');

  }

  /**
   * Copyright disclaimer
   * the starting point of this code was taken from this answer
   * https://stackoverflow.com/a/22480938/10600612
   */
  _inViewPort(el, offset = 0) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Partially visible elements return true:
    let isVisible = (elemTop + offset) < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  _navbarLinksMapping() {

    this.navbarLinks = document.querySelectorAll('.navbar-links>.navbar-item, .mobile-item');
    this.navbarLinks.forEach(function(ele) {
      ele.addEventListener('click', function(e) {
        if (e.target.tagName !== "A") {
          return false;
        }
        e.preventDefault();
        window.scrollTo(0, document.getElementById(ele.getAttribute('data-slide')).offsetTop + 5);
        // if (this._inViewPort(this.BSOD, -100)) {
        //   this.BSOD.classList.add( 'l-slide--blue' );
        //   this.sticky.classList.add('sticky--hidden');
        // }
        this.menu.closeSideMenu();
      }.bind(this));
    }.bind(this));
  }

  /**
   * Copyright disclaimer
   * https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
   */
  isMobileDevice() {
    return false;

    // return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

}

export default ScrollManager;
