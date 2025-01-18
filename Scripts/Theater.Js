


//------------------------------Topbar-Scripts--------------------------------
const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const kalendar = document.getElementById("Kalendar_button");
const events = document.getElementById("Events_button");
const hobbies = document.getElementById("Hobbies_button");
const theater = document.getElementById("Theater_button");


home.addEventListener("click", function(){
   window.location.href = "/pages/Index.html";
});
karte.addEventListener("click", function(){
   window.location.href = "/pages/Karte.html";
});
aktivitaeten.addEventListener("click",function(){
   window.location.href = "/pages/Aktivitäten.html";
});
kalendar.addEventListener("click",function(){
   window.location.href = "/pages/Kalendar.html";
});
events.addEventListener("click", function(){
   window.location.href = "/pages/Events.html";
});
hobbies.addEventListener("click", function(){
   window.location.href = "/pages/Hobbies.html";
});
theater.addEventListener("click", function(){
   window.location.href = "/pages/Theater.html";
});
//------------------------------Topbar-Scripts--------------------------------
//------------------------------Theater-Scripts--------------------------------
const contents = document.querySelectorAll('.content'); // Alle Inhalte
const leftArrow = document.querySelector('.left-arrow'); // Linker Pfeil
const rightArrow = document.querySelector('.right-arrow'); // Rechter Pfeil

let current_index = 0;

function updateContent() {
  contents.forEach((content, index) => {
    content.classList.remove('active');
    if (index === current_index) {
      content.classList.add('active');
    }
  });
}
leftArrow.addEventListener('click', () => {
  current_index = (current_index - 1 + contents.length) % contents.length; // Rückwärts navigieren
  updateContent();
});
rightArrow.addEventListener('click', () => {
  current_index = (current_index + 1) % contents.length; // Vorwärts navigieren
  updateContent();
});

updateContent();
//------------------------------Theater-Scripts--------------------------------
