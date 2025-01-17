const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const kalendar = document.getElementById("Kalendar_button").addEventListener(
  'click', function(){
    window.location.href = "/pages/Kalendar.html";
  }
)




 home.addEventListener("click", function(){
   window.location.href = "../index.html";})

 karte.addEventListener("click", function(){
    window.location.href = "/pages/Karte.html";})

aktivitaeten.addEventListener("click",function(){
   window.location.href = "/pages/Aktivitäten.html";} )