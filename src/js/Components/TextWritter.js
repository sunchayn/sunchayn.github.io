/**
 * TextWritter
 *
 * This class is responsible for enabling Text writter animation
 */

class TextWritter {
  constructor(target, pointer, callback) {
    this.target = target;
    this.content = target.textContent;

    this.target.innerHTML = "";
    this.target.style.visibility = 'hidden';
    this.pointer = pointer;
    this.callback = callback;
    this._init();
  }

  _init() {
    const textWrapper = document.createElement('span');
    const pointerWrapper = document.createElement('span');
    textWrapper.innerText = this.content[0];
    pointerWrapper.innerText = this.pointer;
    this.target.appendChild(textWrapper);
    this.target.appendChild(pointerWrapper);

    this.target.style.visibility = 'visible';

    this._run(textWrapper, pointerWrapper);

  }

  _run(textWrapper, pointerWrapper) {

    let index = 1;
    const len = this.content.length;

    this.timerID = setInterval(function() {

      if (index === len) {

        this._afterRun(pointerWrapper);
        return false;
      }

      textWrapper.append(this.content[index]);
      index++;
    }.bind(this), 100);

  }

  _afterRun(pointerWrapper) {
    clearInterval(this.timerID);

    setInterval(function() {
        if (pointerWrapper.style.visibility === "visible") {
          pointerWrapper.style.visibility = "hidden";
        } else {
          pointerWrapper.style.visibility = "visible";
        }
    }, 400);

    this.callback();
  }

}

export default TextWritter;
