





const burgerMenu = document.querySelector('.burger-menu');
let TRANSLATED = false;
let COLORS_INVERTED = false;
let TEXT_ENLARGED = false;

const translations = {
    headline1: "Don't have any plans for today?",
    headline2: "You're in the right place!",
    paragraph1: `
        Do you know the feeling of spending the whole day on your phone without really knowing what to do?<br>
        Maybe you intended to do something, but by the end of the day, you feel somehow unsatisfied 
        because nothing happened.<br>
        That doesn't have to be the case! Here on our website, you'll find everything you need 
        to make your day meaningful – whether it's an exciting event, cool places, or
        new ideas to discover Trier.<br>
        Get inspired and make the most of your day – you're exactly in the right place
        to experience something great! &hearts;
    `,
    headline3: "Trier, the Oldest City",
    paragraph2: `
        Trier, the oldest city in Germany, has so much more to offer than meets the eye! From Roman ruins, charming old town alleys, and 
        impressive historical sites, you'll find a vibrant culture and a variety of events waiting to be discovered. Whether you start your day at one of the 
        cozy cafés and restaurants, attend a concert in the amphitheater, or simply stroll through the streets – Trier offers you countless ways 
        to make your day exciting and diverse. And the best part: On this page, you'll find all the events and cool places that Trier has to offer. 
        Get inspired and experience the city in a whole new way!
    `
};

const germanText = {
    headline1: "Hast heute kein Plan was Du machen sollst?",
    headline2: "Hier bist Du richtig!",
    paragraph1: `
        Kennst du das Gefühl, den ganzen Tag mit dem Handy zu verbringen, ohne wirklich zu wissen, was du tun sollst?<br>
        Vielleicht hast du dir vorgenommen, etwas zu unternehmen, aber am Ende des Tages fühlst du dich irgendwie unzufrieden, 
        weil nichts passiert ist.<br>
        Das muss nicht sein! Hier auf unserer Webseite findest du alles, was du brauchst, 
        um deinen Tag sinnvoll zu gestalten – sei es ein spannendes Event, coole Orte oder
        neue Ideen, um Trier zu entdecken.<br>
        Lass dich inspirieren und hol das Beste aus deinem Tag heraus – du bist hier genau richtig,
         um etwas Großartiges zu erleben! &hearts;
    `,
    headline3: "Trier, die älteste Stadt",
    paragraph2: `
        Trier, die älteste Stadt Deutschlands, hat so viel mehr zu bieten, als man auf den ersten Blick denkt! Zwischen römischen Ruinen, charmanten Altstadtgassen und 
        beeindruckenden historischen Stätten steckt eine lebendige Kultur und eine Vielzahl von Veranstaltungen, die darauf warten, von dir entdeckt zu werden. Ob du in einem der 
        gemütlichen Cafés und Restaurants den Tag beginnst, ein Konzert im Amphitheater besuchst oder einfach durch die Straßen schlenderst – Trier bietet dir zahlreiche Möglichkeiten,
        deinen Tag spannend und abwechslungsreich zu gestalten. Und das Beste: Auf dieser Seite findest du alle Events und coolen Orte, die Trier zu bieten hat. Lass dich 
        inspirieren und erlebe die Stadt auf eine ganz neue Weise!
    `
};

burgerMenu.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "Schriftgröße ändern":
            changeFontSize();
            break;
        case "Farbschema":
            toggleColorScheme();
            break;
        case "Sprache":
            toggleLanguage();
            break;
        default:
            console.log("Default selected");
    }
});

function toggleLanguage() {
    TRANSLATED = !TRANSLATED; 
    const textData = TRANSLATED ? germanText : translations;

    document.getElementById("headline1").textContent = textData.headline1;
    document.getElementById("headline2").textContent = textData.headline2;
    document.getElementById("paragraph1").innerHTML = textData.paragraph1;
    document.getElementById("headline3").textContent = textData.headline3;
    document.getElementById("paragraph2").innerHTML = textData.paragraph2;

}

function toggleColorScheme() {
    const newColor = COLORS_INVERTED ? "#FFC745" : "lightblue";
    document.body.style.backgroundColor = newColor;
    COLORS_INVERTED = !COLORS_INVERTED;

    saveSettings({
        background_color: newColor
    });
}

function changeFontSize() {
    const newSize = TEXT_ENLARGED ? "16px" : "30px";
    document.body.style.fontSize = newSize;
    TEXT_ENLARGED = !TEXT_ENLARGED;

    saveSettings({
        text_size: newSize
    });
}

function saveSettings(settings) {
    fetch("../PHP/save_settings.php", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(settings) 
    })
    .then(response => response.json())
    .then(data => {
        console.log("Settings saved:", data);
    })
    .catch(error => {
        console.error("Error saving settings:", error);
    });
}
