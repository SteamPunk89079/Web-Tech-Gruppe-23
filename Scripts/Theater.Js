// Elemente auswählen
const contents = document.querySelectorAll('.content'); // Alle Inhalte
const leftArrow = document.querySelector('.left-arrow'); // Linker Pfeil
const rightArrow = document.querySelector('.right-arrow'); // Rechter Pfeil

let currentIndex = 0;

function updateContent() {
  contents.forEach((content, index) => {
    content.classList.remove('active');
    if (index === currentIndex) {
      content.classList.add('active');
    }
  });
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + contents.length) % contents.length; // Rückwärts navigieren
  updateContent();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contents.length; // Vorwärts navigieren
  updateContent();
});

updateContent();
