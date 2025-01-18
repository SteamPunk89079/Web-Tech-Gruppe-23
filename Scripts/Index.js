const home = document.getElementById("Home_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const theater = document.getElementById("Theater_button");
const hobbies = document.getElementById("Hobbies_button");
const karte = document.getElementById("Karte_button");
const kalendar = document.getElementById("Kalendar_button");
const events = document.getElementById("Events_button");


home.addEventListener("click", function(){
   window.location.href = "/pages/Index.html";
});
aktivitaeten.addEventListener("click",function(){
   window.location.href = "/pages/Aktivitäten.html";
});
theater.addEventListener("click", function(){
window.location.href = "/pages/Theater.html";
});
hobbies.addEventListener("click", function(){
   window.location.href = "/pages/Hobbies.html";
});
karte.addEventListener("click", function(){
   window.location.href = "/pages/Karte.html";
});
kalendar.addEventListener("click",function(){
   window.location.href = "/pages/Kalendar.html";
});
events.addEventListener("click", function(){
   window.location.href = "/pages/Events.html";
});








   