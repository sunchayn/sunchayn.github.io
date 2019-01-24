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

document.addEventListener('keypress', function(e) {
  e = e || window.event;
  if (e.key === 'h') {
    window.location.href = '/';
  }
});
