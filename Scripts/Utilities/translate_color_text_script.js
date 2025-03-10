function toggleLanguage(language) {
    const translations = {
        
        german: {
            headline1: "Hast heute kein Plan was Du machen sollst?",
            headline2: "Hier bist Du richtig!",
            paragraph1: "Kennst du das Gefühl, den ganzen Tag mit dem Handy zu verbringen, ohne wirklich zu wissen, was du tun sollst? Vielleicht hast du dir vorgenommen, etwas zu unternehmen, aber am Ende des Tages fühlst du dich irgendwie unzufrieden, weil nichts passiert ist. Das muss nicht sein! Hier auf unserer Webseite findest du alles, was du brauchst, um deinen Tag sinnvoll zu gestalten – sei es ein spannendes Event, coole Orte oder neue Ideen, um Trier zu entdecken. Lass dich inspirieren und hol das Beste aus deinem Tag heraus – du bist hier genau richtig, um etwas Großartiges zu erleben! ❤️",
            headline3: "Trier, die älteste Stadt",
            paragraph2: "Trier, die älteste Stadt Deutschlands, hat so viel mehr zu bieten, als man auf den ersten Blick denkt! Zwischen römischen Ruinen, charmanten Altstadtgassen und beeindruckenden historischen Stätten steckt eine lebendige Kultur und eine Vielzahl von Veranstaltungen, die darauf warten, von dir entdeckt zu werden. Ob du in einem der gemütlichen Cafés un Restaurants den Tag beginnst, ein Konzert im Amphitheater besuchst oder einfach durch die Straßen schlenderst – Trier bietet dir zahlreiche Möglichkeiten, deinen Tag spannend und abwechslungsreich zu gestalten. Und das Beste: Auf dieser Seite findest du alle Events und coolen Orte, die Trier zu bieten hat. Lass dich inspirieren und erlebe die Stadt auf eine ganz neue Weise!",
        },
        english: {
            headline1: "Don't have any plans for today?",
            headline2: "You're in the right place!",
            paragraph1: "Do you know the feeling of spending the whole day on your phone without really knowing what to do? Maybe you planned to do something, but at the end of the day, you feel unsatisfied because nothing happened. That doesn't have to be the case! Here on our website, you'll find everything you need to make your day meaningful – whether it's an exciting event, cool places, or new ideas to discover Trier. Get inspired and make the most out of your day – you're in the right place to experience something great! ❤️",
            headline3: "Trier, the Oldest City",
            paragraph2: "Trier, the oldest city in Germany, has so much more to offer than it seems at first glance! Between Roman ruins, charming old-town alleys, and impressive historical sites, you'll find a vibrant culture and a variety of events waiting to be discovered. Whether you start your day at a cozy café, visit a concert at the amphitheater, or simply stroll through the streets – Trier offers numerous ways to make your day exciting and varied. And the best part: on this page, you'll find all the events and cool places Trier has to offer. Get inspired and experience the city in a whole new way!",
        },
    };
    const content = translations[language];
    if (content) {
        document.getElementById("headline1").textContent = content.headline1;
        document.getElementById("headline2").textContent = content.headline2;
        document.getElementById("paragraph1").textContent = content.paragraph1;
        document.getElementById("headline3").textContent = content.headline3;
        document.getElementById("paragraph2").textContent = content.paragraph2;
    }
}

const locationCard = document.querySelectorAll(".location_card");
const eventCards = document.querySelectorAll(".card");
const headline1 = document.getElementById("headline1");
const headline2 = document.getElementById("headline3");


//--------------------------------------LOADER-SCRIPT--------------------------
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
        document.body.style.backgroundColor = theme === "dark" ? "#333" : "rgb(255, 212, 111)";
        document.body.style.color = theme === "dark" ? "#fff" : "#000";
        headline1.style.backgroundColor = theme === "dark" ? "rgb(117, 117, 117)" : "rgb(255, 165, 0)";
        headline2.style.backgroundColor = theme === "dark" ? "rgb(117, 117, 117)" : "rgb(255, 165, 0)";
        //---------------------------KARTE-PAGE-----------------------------------
        locationCard.forEach((locationCard) => {
            locationCard.style.backgroundColor = theme === "dark" ? "#7A7A7A" : "#F8DF51";
        });
        //---------------------------KARTE-PAGE-----------------------------------
        //---------------------------EVENTS-PAGE-----------------------------------
        eventCards.forEach((eventCard) => {
            eventCard.style.backgroundColor = theme ===  "dark" ? "#7A7A7A" : "#F8DF51";
        });
        const dynamicCardContainer = document.getElementById("card");
        if (dynamicCardContainer) {
            const events = dynamicCardContainer.querySelectorAll(".event");
            events.forEach((event) => {
                event.style.backgroundColor = theme === "dark" ? "#7A7A7A" : "#F8DF51";
                event.style.color = theme === "dark" ? "#000000" : "#F8DF51";
            });
        }
        //---------------------------EVENTS-PAGE-----------------------------------
    }
    const fontSize = localStorage.getItem("font-size");
    if (fontSize) {
        applyFontSize(fontSize);
    }
    const language = localStorage.getItem("language");
    if (language) {
        toggleLanguage(language);
    }
});
function applyFontSize(size) {
    const fontSize = size === "large" ? "30px" : "15px"; 
    document.body.style.fontSize = fontSize;
    const elements = document.querySelectorAll("*:not(.topbars):not(.topbars *)"); 
    elements.forEach((el) => {
        el.style.fontSize = fontSize; 
    });
}
//--------------------------------------LOADER-SCRIPT--------------------------
//--------------------------------------BUTTON-SCRIPT--------------------------
document.querySelectorAll(".radio_button input").forEach((input) => {
    input.addEventListener("change", (event) => {
        const { name, value } = event.target;
        localStorage.setItem(name, value);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const settings = ["theme", "font-size", "language"];
    settings.forEach((setting) => {
        const savedValue = localStorage.getItem(setting);
        if (savedValue) {
            const input = document.querySelector(`input[name="${setting}"][value="${savedValue}"]`);
            if (input) input.checked = true;
        }
    });
});

const home_button = document.getElementById("home_button");
home_button.addEventListener('click', function() {
    localStorage.setItem('reload', 'true');
    window.history.back();
});
//--------------------------------------BUTTON-SCRIPT--------------------------
