const Pages = {
    0: "index.html",
    1: "Aktivitäten.html",
    2: "Theater.html",
    3: "Hobbies.html",
    4: "Karte.html",
    5: "Kalendar.html",
    6: "Events.html"
};

function determine_page() {
    const pageTitle = document.title; // title of the current page
    if (pageTitle === "Homepage") {
        return 0;
    } else if (pageTitle === "Aktivitäten") {
        return 1;
    } else if (pageTitle === "Theater") {
        return 2;
    } else if (pageTitle === "Hobbies") {
        return 3;
    } else if (pageTitle === "Karte") {
        return 4;
    } else if (pageTitle === "Kalendar") {
        return 5;
    } else if (pageTitle === "Events") {
        return 6;
    } else {
        return 0; //homepage if no match
    }
}

let current_page = parseInt(localStorage.getItem('current_page')) || determine_page();

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        current_page = (current_page + 1) % Object.keys(Pages).length; 
    } else if (event.key === 'ArrowLeft') {
        current_page = (current_page - 1 + Object.keys(Pages).length) % Object.keys(Pages).length; 
    } else {
        return; 
    }
    localStorage.setItem('current_page', current_page);
    window.location.href = Pages[current_page];
});