/**
 * ScrollManager
 * 
 * This class is responsible for handling the behaviours of the site based on the scrolling.
 */

import throttle from 'lodash.throttle';

class ScrollManager {

  constructor(BSOD, sticky, menu) {

    // DOM instances
    this.BSOD = BSOD;
    this.sticky = sticky;

    // An instance of class Menu
    this.menu = menu;

    // Store the slide's title DOM instance => ~/hello world$
    this.title = document.getElementById('slide-title');

    // Register the events
    this._watch();

    // Map the navbar links to its slides
    this._navbarLinksMapping();
  }

  _watch() {

    this.alreadyScrolled = false;

    // Used to lock the treatement
    this.working = false;

    this.slides = document.querySelectorAll('.l-slide');
    this.slidesLength = this.slides.length;
    
    // The previous position of the scrollbar
    this.lastScroll = 0;

    // Set the active slide
    this._handleActiveSlide();

    // Store the BSOD percentage counter
    this.BSODCounter = document.getElementById('BSOD-percentage');

    // Bind the Events
    window.addEventListener('scroll', this._handleActiveSlide.bind(this));
    window.addEventListener('scroll', throttle(this._showBSOD.bind(this), 300, {'leading': false}));
  }

  /**
   * Handle the logic behind toggling the visibility of the BSOD
   * 
   */
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

    // If the user scroll out of the BSOD => reset everything
    if (!this._inViewPort(this.BSOD)) {
      this.alreadyScrolled = false;
      this.sticky.classList.remove('sticky--hidden');
      BSOD.classList.remove( 'l-slide--blue' );
      clearInterval(this.BDOMTimerID);
    }

    this.working = false;
  }

    /**
     * A slave function for "_showBSOD" to actually show the BSOD
     */
    __handleBSODShow() {
      // Only if the user not already scrolled to the BSOD and it still visible in the viewport
      if (!this.alreadyScrolled) {

        // Add the blue background
        BSOD.classList.add( 'l-slide--blue' );

        // Hide the navbar
        this.sticky.classList.add('sticky--hidden');
        
        // Force scroll to the BSOD
        this.BSOD.scrollIntoView();
        
        // Handle the BSOD's percentage counter
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

  /**
   * Determine which slide is currently active
   */
  _handleActiveSlide() {

    // let visibleSlides = [];
    // let down = false;
    let currentScroll = window.scrollY;
    
    if (currentScroll === 0) {
      this.lastScroll = currentScroll;
      return false;
    }

    // down = currentScrolls >= this.lastScroll;

    // Loop through slides to determine which one is currently visible
    for (let index = 0; index < this.slidesLength; index++) {

      let ele = this.slides[index];

      // Ignore the current slide if it's not in the viewport
      if (!this._inViewPort(ele, -100)) {
        continue;
      }

      // Sometimes, two slides may be visible at the same time
      // we have to select the one with that have more content visible
      if (Math.abs(ele.getBoundingClientRect().top < 100)) {
        this.currentSlide = ele;
        break;
      }
    }

    this.lastScroll = currentScroll;

    // Get the currently active navbar item and remove it's status
    const currentActive = document.querySelector('.navbar-item.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }

    // Add the active stats to the new navbar item
    let targetNav = document.querySelector('[data-slide=\''+ this.currentSlide.getAttribute('id') +'\']');
    if (targetNav) {
      targetNav.classList.add('active');
    }

    // Handle whenever the slide is dark or light to update the navbar background for better visibilty
    if (this.currentSlide.getAttribute('data-inverted')) {
      this.sticky.classList.add('sticky--inverted');
    } else if (this.sticky.classList.contains('sticky--inverted')) {
      this.sticky.classList.remove('sticky--inverted');
    }

    // Update the Title
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

  /**
   * Map the navbars' links to its slides
   */
  _navbarLinksMapping() {

    this.navbarLinks = document.querySelectorAll('.navbar-links>.navbar-item, .mobile-item');
    this.navbarLinks.forEach(function(ele) {
      ele.addEventListener('click', function(e) {
        if (e.target.tagName !== "A") {
          return false;
        }
        e.preventDefault();
        window.scrollTo(0, document.getElementById(ele.getAttribute('data-slide')).offsetTop + 5);
        this.menu.closeSideMenu();
      }.bind(this));
    }.bind(this));
  }

}

export default ScrollManager;
