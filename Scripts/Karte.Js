




//-------------------------------TOPBAR-BUTTONS------------------------------------
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