
/**
 * Menu
 *
 * This class is responsible for handiling the responsivness and style of the Menu
 */

class Menu {

  constructor(menuHolder, slidesClass) {
    this.menu = menuHolder;
    this.slides = document.querySelectorAll(slidesClass);

    this.navbar = this.menu.querySelector('.navbar');

    // Initilize the menu
    this._init();
  }

  /**
   * Initilization
   */
  _init() {
    
    // Set the appropriate top padding for the page based on navbar height
    this._adaptNavHeight();

    // Register the resize event
    window.addEventListener('resize', this._adaptNavHeight.bind(this));
    
    // Handle the mobile sidemenu initialization
    this._initSideMenu();
  }

  /**
   * Set the appropriate top padding for the page based on navbar height
   */
  _adaptNavHeight() {

    this.menuHeight = this.menu.clientHeight;

    this.slides.forEach(function(ele) {
      ele.style.paddingTop = this.menuHeight + 'px';
      ele.style.paddingBottom = this.menuHeight  + 'px';
    }.bind(this));
  
  }

  /**
   * Handle the mobile sidemenu initialization
   */
  _initSideMenu() {
    this.sidemenu = document.querySelector('.mobile-menu');
    this.overlay = document.querySelector('.overlay');
    const toggler = document.getElementById('sideMenu-toggle');

    toggler.addEventListener('click', function(e) {
      e.preventDefault();

      this._openSideMenu();
    }.bind(this));

    this.overlay.addEventListener('click', function(e) {
      this.closeSideMenu();
    }.bind(this));
  }

  _toggleSideMenu(sidemenu) {

    if (sidemenu.classList.contains('open')) {
      this.overlay.classList.add('active');
      this.sidemenu.classList.add('open');
    } else {
      this.sidemenu.classList.remove('open');
      this.overlay.classList.remove('active');
    }
  }

  _openSideMenu() {
    this.overlay.classList.add('active');
    this.sidemenu.classList.add('open');
  }

  closeSideMenu() {
    this.overlay.classList.remove('active');
    this.sidemenu.classList.remove('open');
  }

  getNavbar(){
    return this.navbar;
  }

}

export default Menu;
