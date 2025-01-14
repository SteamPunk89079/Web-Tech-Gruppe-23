const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const theater = document.getElementById("Theater_button");
const kalendar = document.getElementById("Kalendar_button").addEventListener(
  'click', function(){
    window.location.href = "/pages/Kalendar.html";
  }
)
const events = document.getElementById("Events_button");



 home.addEventListener("click", function(){
   window.location.href = "../index.html";})

 karte.addEventListener("click", function(){
    window.location.href = "/pages/Karte.html";})

aktivitaeten.addEventListener("click",function(){
   window.location.href = "/pages/Aktivitäten.html";} )

theater.addEventListener("click", function(){
  window.location.href = "/pages/Theater.html";})
  
events.addEventListener('click', function () {
  window.location.href = "./Events.html"
});

// Elemente auswählen
const contents = document.querySelectorAll('.content'); // Alle Inhalte
const leftArrow = document.querySelector('.left-arrow'); // Linker Pfeil
const rightArrow = document.querySelector('.right-arrow'); // Rechter Pfeil

let currentIndex = 0; // Startindex

// Funktion, um den aktiven Inhalt zu aktualisieren
function updateContent() {
  // Alle Inhalte verstecken
  contents.forEach((content, index) => {
    content.classList.remove('active'); // Entferne 'active' von allen
    if (index === currentIndex) {
      content.classList.add('active'); // Füge 'active' nur zum aktuellen hinzu
    }
  });
}

// Event-Listener für den linken Pfeil
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + contents.length) % contents.length; // Rückwärts navigieren
  updateContent(); // Inhalt aktualisieren
});

// Event-Listener für den rechten Pfeil
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contents.length; // Vorwärts navigieren
  updateContent(); // Inhalt aktualisieren
});

// Initialen Inhalt anzeigen
updateContent();
