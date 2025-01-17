




//-------------------------------TOPBAR-BUTTONS------------------------------------
const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const kalendar = document.getElementById("Kalendar_button").addEventListener("click",
    function(){window.location.href = "/pages/Kalendar.html"}
)

home.addEventListener("click", function(){
    window.location.href = "../index.html";})

karte.addEventListener("click", function(){
    window.location.href = "/pages/Karte.html";})

aktivitaeten.addEventListener("click",function(){
   window.location.href = "/pages/Aktivitäten.html";} )
//-------------------------------TOPBAR-BUTTONS------------------------------------


//-------------------------------KARTE---PAGE------------------
const cards = document.querySelectorAll(".location_card");
    cards.forEach(card => {
        const video = card.querySelector("video");
        card.addEventListener('mouseenter', function (){
            video.play();
        });

        card.addEventListener("mouseleave", function() {
            video.pause();
            console.log(this.getElementById());
        });
        
        card.addEventListener('click', function(){
            console.log(card.getAttribute('test'));
            console.log("Pressed")
        });
    });
//-------------------------------KARTE---PAGE------------------



//------------------------------POPUP-SKRIPT------------------------------------------
setTimeout(() => {
    document.getElementById('popup').style.display = 'block';
}, 30000); 
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
//------------------------------POPUP-SKRIPT------------------------------------------