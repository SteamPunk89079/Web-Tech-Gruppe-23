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

document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const sections = document.querySelectorAll(".content-container .content");

  let currentIndex = 0; // Start mit der ersten Sektion

  const updateSlider = () => {
      console.log("Aktueller Index:", currentIndex);
      sections.forEach((section, index) => {
          if (index === currentIndex) {
              section.classList.add("content");
              section.style.opacity = "1"; 
              section.style.display = "flex";
              console.log("Sichtbar gemacht:", section);
          } else {
              section.classList.remove("content");
              section.style.opacity = "0";
              section.style.display = "none";
          }
      });
  };

  rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % sections.length;
      console.log("Rechts geklickt, neuer Index:", currentIndex);
      updateSlider();
  });

  leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
      console.log("Links geklickt, neuer Index:", currentIndex);
      updateSlider();
  });

  updateSlider(); // Erste Sektion initialisieren
});
