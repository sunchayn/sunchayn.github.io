import ScrollReveal from 'scrollreveal';
import Menu from './Components/Menu.js';
import About from './Components/About.js';
import ScrollManager from './Components/ScrollManager.js';
import TextWritter from './Components/TextWritter.js';
import TextAnimator from './Components/TextAnimator.js';
import KeyboardBinder from './Components/KeyboardBinder.js';

(function(){

  const sticky = document.getElementById('menu');
  const menu = new Menu(sticky, '.l-slide');
  const textWritter = new TextWritter( document.getElementById('post'), '_', function() {
    ScrollReveal().reveal('.hero-desc');
  } );
  const scrollManager = new ScrollManager(document.getElementById('BSOD'), sticky, menu);
  const about = new About(document.getElementById('about'));

  new TextAnimator().feedNode(document.getElementById('contact-spinner'));
  
  if (window.innerWidth > 768) {
    new KeyboardBinder();
  }

  handleQuote();
  handleScrollReveal();

  function handleQuote() {

    console.log("%cWell, i hate bugs too !", "font-weight: bold; color: green;");

    const quotes = [
      {
        content: 'Simplicity is the ultimate sophistication',
        author: 'Leonardo da Vinci'
      },
      {
        content: 'You have succeeded in life when all you really want is only what you really need',
        author: 'Vernon Howard'
      },
      {
        content: 'The power of imagination makes us infinite',
        author: 'John Muir'
      },
      {
        content: 'If there is no struggle, there is no progress',
        author: 'Frederick Douglass'
      },
      {
        content: 'Dream big and dare to fail.',
        author: 'Norman Vaughan '
      },

    ];

    const quote = quotes[ Math.floor(Math.random() * quotes.length) ];

    console.log('"' + quote.content + '" %c- ' + quote.author, 'font-style: italic;');
  }

  function handleScrollReveal() {
    ScrollReveal().reveal(
      '.about-paragraph, blockquote, .js-signature', 
      {
        delay: 200,
        interval: 200,
        afterReveal: function (el) {
          if (el.classList.contains('js-signature') && el.nodeName !== "IMG") {
            el.contentDocument.getElementById('signature').classList.add('start');
          }
        }
      }
    );

    ScrollReveal().reveal('.qualifications-side, .qualifications-group, .js-reveal-holder', {delay: 200, interval: 200});
    ScrollReveal().reveal('.project', {delay: 200, interval: 200});
    ScrollReveal().reveal('.blog-element', {delay: 200, interval: 200});
  }

})();
