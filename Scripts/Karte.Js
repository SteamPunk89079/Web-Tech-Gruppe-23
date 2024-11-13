const home = document.getElementById("Home_button");
 const karte = document.getElementById("Karte_button");
 const aktivitaeten = document.getElementById("Aktivitaeten_button");





 home.addEventListener("click", function(){
    window.location.href = "../index.html";})

 karte.addEventListener("click", function(){
    window.location.href = "/pages/Karte.html";})

aktivitaeten.addEventListener("click",function(){
   window.location.href = "/pages/Aktivitäten.html";} )



//-------------------------------KARTE---PAGE------------------



const cards = document.querySelectorAll(".location_card");
    cards.forEach(card => {
        const video = card.querySelector("video");
        card.addEventListener('mouseenter', function (){
            video.play();
            console.log(card.getElementById(this)+" mouse entered");
        });

        card.addEventListener("mouseleave", function() {
            video.pause();
            console.log(card.getElementById(this)+" mouse exited");
        });
    });