class About {

  constructor(container) {
    this.container = container;
    this.versionTrigger = container.querySelector('#about-version');
    this.content = this.container.querySelector('.about');
    this.readmoreWrapper = this.container.querySelector('.about-readmore');
    this.readmoreButton = this.container.querySelector('#js-trigger-readmore');
    this._events();
  }

  _events() {
    // this._toggleVersions();
    this._readmore();
  }

  _toggleVersions() {
    // true means is long version
    this.toggleStatus = true;

    this.togglables = this.container.querySelectorAll('.js-version-togglable');
    this.versionTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      this.togglables.forEach(function(ele) {
        if (ele.style.display === 'none') {
          // ele.style.display = (ele.tagName === 'P' || ele.tagName === 'BLOCKQUOTE') ? 'block' : 'inline';
          ele.style.display = ele.getAttribute('data-defaultDisplay') || 'inline-block';
        } else {
          ele.setAttribute('data-defaultDisplay', getComputedStyle(ele, null).display);
          ele.style.display = 'none';
        }
      });

      if (this.toggleStatus) {
        this.versionTrigger.innerHTML = '[ longer version ]';
      } else {
        this.versionTrigger.innerHTML = '[ shorter version ]';
      }

      this.toggleStatus = !this.toggleStatus;
    }.bind(this));
  }

  _readmore() {
    let currentMaxHeight = 400;
    // let currentMaxHeight = getComputedStyle(this.container).maxHeight;
    let toggled = false;
    this.readmoreButton.addEventListener('click', function(e) {
      if (toggled) {
        this.content.style.maxHeight = currentMaxHeight + 'px';
        this.readmoreWrapper.classList.remove('about-readmore--toggled');
        this.readmoreButton.innerHTML = '[ show full content ]';
        window.scrollTo(0, this.container.offsetTop + 10);
      } else {
        this.content.style.maxHeight = 'none';
        this.readmoreWrapper.classList.add('about-readmore--toggled');
        this.readmoreButton.innerHTML = '[ show less content ]';
      }

      toggled = !toggled;
    }.bind(this));
  }

}

export default About;
