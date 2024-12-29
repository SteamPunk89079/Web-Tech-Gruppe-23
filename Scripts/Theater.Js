const contents = document.querySelectorAll('.content');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

// Funktion, um den aktiven Inhalt anzuzeigen
function updateContent() {
  contents.forEach((content, index) => {
    content.classList.toggle('active', index === currentIndex);
  });
}

// Event-Listener für die Pfeile
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + contents.length) % contents.length;
  updateContent();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contents.length;
  updateContent();
});

// Initial den ersten Inhalt anzeigen
updateContent();

