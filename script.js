const words = ["progress", "futurism", "evolution"];
let index = 0;
let textPosition = 0;
const typingSpeed = 100; // Velocidade da digitação
const erasingSpeed = 100; // Velocidade de apagar
const wordElement = document.getElementById('dynamic-word');
const cursorElement = document.getElementById('cursor');

function typeWord() {
  const currentWord = words[index];
  wordElement.textContent = currentWord.slice(0, textPosition);

  if (textPosition < currentWord.length) {
    textPosition++;
    setTimeout(typeWord, typingSpeed);
  } else {
    setTimeout(eraseWord, 1200); // Pausa antes de apagar
  }
}

function eraseWord() {
  const currentWord = words[index];
  wordElement.textContent = currentWord.slice(0, textPosition);

  if (textPosition > 0) {
    textPosition--;
    setTimeout(eraseWord, erasingSpeed);
  } else {
    index = (index + 1) % words.length; 
    setTimeout(typeWord, 500);
  }
}


typeWord();


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.6
});


const solutionItems = document.querySelectorAll('.solution-item, .solutions-content');

solutionItems.forEach(item => {
  observer.observe(item);
});


