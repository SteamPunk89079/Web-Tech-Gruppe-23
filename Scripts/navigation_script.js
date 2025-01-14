const Pages = {
    0: "../index.html",
    1: "Aktivitäten.html",
    2: "Theater.html",
    3: "Hobbies.html",
    4: "Karte.html",
    5: "Kalendar.html",
    6: "Events.html"
};
const index_pages = {
    0: "index.html",
    1: "./Pages/Aktivitäten.html",
    2: "./Pages/Theater.html",
    3: "./Pages/Hobbies.html",
    4: "./Pages/Karte.html",
    5: "./Pages/Kalendar.html",
    6: "./Pages/Events.html"
};


let current_page = parseInt(localStorage.getItem('current_page')) || 1;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (current_page === Object.keys(Pages).length) {
            current_page = 0;
        } else {
            current_page++;
        }
    } else if (event.key === 'ArrowLeft') {
        if (current_page === 0) {
            current_page = Object.keys(Pages).length;
        } else {
            current_page--;
        }
    } else {
        return; 
    }
    localStorage.setItem('current_page', current_page);
    window.location.href = Pages[current_page];
});