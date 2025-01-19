const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const theater = document.getElementById("Theater_button");
const kalendar = document.getElementById("Kalendar_button");




home.addEventListener("click", function () {

});

karte.addEventListener("click", function () {
   window.location.href = "/pages/Karte.html";
})

aktivitaeten.addEventListener("click", function () {
   window.location.href = "/pages/Aktivitäten.html";
})

kalendar.addEventListener("click", function () {
   window.location.href = "/pages/Kalendar.html";
})

theater.addEventListener("click", function () {
   window.location.href = "/pages/Theater.html";
})


//---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

   const topbar = document.querySelector(".topbars");
   const mobilekasten = document.querySelector(".mobile-container");

   topbar.classList.add("hidden");

   mobilekasten.addEventListener("click", function () {
      topbar.classList.toggle("hidden");
      mobilekasten.classList.toggle("active");
   });

   document.addEventListener("click", function (event) {
      if (!topbar.contains(event.target) && !mobilekasten.contains(event.target)) {
         topbar.classList.add("hidden");
         mobilekasten.classList.remove("active");
      }
   });

});