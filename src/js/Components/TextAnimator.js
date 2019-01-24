
class TextAnimator {
  constructor(animationPattern = ['\\', '/', '-']) {
    this.animationPattern = animationPattern;
    this.patternLength = this.animationPattern.length;
    //in ms
    this.animationSpeed = 500;

    return this;
  }

  feedNode(node) {
    this.targetNode = node;
    this.targetNode.style.display = 'inline-block';
    this.targetNode.style.width = 10 + 'px';

    this._startAnimation();
  }

  _startAnimation() {
    this.currentIndex = 0;
    this._updateTheAnimation();
    this.animationID = setInterval(this._updateTheAnimation.bind(this), this.animationSpeed);
  }

  _updateTheAnimation() {
    this.targetNode.innerHTML = this.animationPattern[this.currentIndex];
    this.currentIndex++;
    if (this.currentIndex >= this.patternLength) {
      this.currentIndex = 0;
    }
  }

  stopAnimation() {
    clearInterval(this.animationID);
    this.targetNode.innerHTML = '-';
  }


}

export default TextAnimator;
