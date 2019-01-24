
class Menu {
  constructor(menuHolder, slidesClass) {
    this.menu = menuHolder;
    this.slides = document.querySelectorAll(slidesClass);

    this.navbar = this.menu.querySelector('.navbar');

    this._init();
  }

  _init() {
    
    this._adaptNavHeight();

    window.addEventListener('resize', this._adaptNavHeight.bind(this));
    this._initSideMenu();
    // this._events();
  }

  _adaptNavHeight() {
    this.menuHeight = this.menu.clientHeight;

    this.slides.forEach(function(ele) {
      ele.style.paddingTop = this.menuHeight + 'px';
      ele.style.paddingBottom = this.menuHeight  + 'px';
    }.bind(this));
  }

  _events() {
    this.menu.addEventListener('mouseover', function() {
      this.classList.remove('navbar--collapsed');
    });
  }

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

  _toggleSideMenu(sidemenu, overlay) {

    if (sidemenu.classList.contains('open')) {
      this.overlay.classList.add('active');
      this.sidemenu.classList.add('open');
    } else {
      this.sidemenu.classList.remove('open');
      this.overlay.classList.remove('active');
    }
  }

  _openSideMenu(sidemenu, overlay) {
    this.overlay.classList.add('active');
    this.sidemenu.classList.add('open');
  }

  closeSideMenu(sidemenu, overlay) {
    this.overlay.classList.remove('active');
    this.sidemenu.classList.remove('open');
  }

  getNavbar(){
    return this.navbar;
  }

}

export default Menu;
