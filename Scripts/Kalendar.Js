const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const kalendar = document.getElementById("Kalendar_button");

home.addEventListener('click', function() {
    window.location.href = "../index.html";
});
karte.addEventListener('click', function() {
    window.location.href = "./Karte.html";
});
aktivitaeten.addEventListener('click', function() {
    window.location.href = "./Aktivitaten.html";
});

const today = new Date(); 
const calendar_text = document.getElementById("kalendar");
const month_text = document.getElementById("month_text");
const days_left = document.getElementById("days_left_counter");

//--------------------------DEADLINE---------------------
const deadline = new Date(today.getFullYear(), 11, 25); 
if (today > deadline) {
    deadline.setFullYear(today.getFullYear() + 1); 
}
const time_diff = deadline - today; 
const days_remaining = Math.floor(time_diff / (1000 * 3600 * 24));
//--------------------------DEADLINE---------------------

const month_name = today.toLocaleString('de-DE', { month: 'long' });

function get_days_in_month(year, month) {
    const next_month = new Date(year, month, 1);
    next_month.setDate(0); 
    return next_month.getDate(); 
}

let arr = [];
for (let i = 1; i <= get_days_in_month(today.getFullYear(), today.getMonth()); i++) {
    if (i === today.getDate()) {
        arr.push(`<p style="background-color: red; color: white;">${i}</p>`);
    } else {
        arr.push(`<p>${i}</p>`);
    }
}

calendar_text.innerHTML = arr.join("");  
month_text.innerHTML = month_name; 

days_left.innerHTML = `${days_remaining + 1} days left until Christmas`;
