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

const today = new Date();
const calendar_text = document.getElementById("kalendar");
const month_text = document.getElementById("month_text");
const days_left = document.getElementById("days_left_counter");

let actual_month = today.getMonth();

//--------------------------MONTH-NAVIGATION--------------------------
const month_before = document.getElementById("month_before");
const month_after = document.getElementById("month_after");

month_before.addEventListener('click', function () {
    actual_month -= 1;
    if (actual_month < 0) {
        actual_month = 11;
        today.setFullYear(today.getFullYear() - 1);
    }
    updateCalendar();
});

month_after.addEventListener('click', function () {
    actual_month += 1;
    if (actual_month > 11) {
        actual_month = 0;
        today.setFullYear(today.getFullYear() + 1);
    }
    updateCalendar();
});
//--------------------------MONTH-NAVIGATION--------------------------
//------------------------------MAIN---------------------------------------
updateCalendar();
upcoming_events();
//------------------------------MAIN---------------------------------------
/*-------------------CALENDAR-----------------------*/
async function updateCalendar() {
    const days_in_month = get_days_in_month(today.getFullYear(), actual_month);
    const month_name = new Date(today.getFullYear(), actual_month, 1).toLocaleString('de-DE', { month: 'long' });
    let arr = [];
    for (let i = 1; i <= days_in_month; i++) {
        if (i === today.getDate() && actual_month === today.getMonth()) {
            arr.push(`<p
                style="background-color: red; color: white;"
                onmouseover="this.style.backgroundColor='green'; this.style.color='white';"
                onmouseout="this.style.backgroundColor='red'; this.style.color='white';"
            >${i}</p>`);
        } else if ( await is_date_event(i, actual_month + 1) ){ 
            arr.push(`<div style="color: black;" 
                        this.style.color='white';">
                        <p class="circle-paragraph">${i}</p>
                    </div>`)
        } else {
            arr.push(`<p>${i}</p>`);
        }
    }
    calendar_text.innerHTML = arr.join("");
    month_text.innerHTML = month_name;
}
async function get_event_dates(){
    let date_event_arr = [];
    let response = await fetch(`../PHP/data.json`)
    if (!response.ok){
        throw new Error("Filter malfunction");
    }
    let dtb = await response.json()
    dtb.forEach((inner_array) => {
        const entry = inner_array[0];
        date_event_arr.push(entry.date);
    });
    return date_event_arr
}
async function is_date_event(day, month) {
    let dates_array = await get_event_dates();
    let valid = false;
    dates_array.forEach(my_date => {
        let [year, month_str, day_str] = my_date.split("-");
        let event_date = new Date(year, month_str - 1, day_str);
        if (event_date.getDate() === day && event_date.getMonth() + 1 === month) {
            valid = true; 
        }
    })
    return valid;
}
function get_days_in_month(year, month) {
    const next_month = new Date(year, month + 1, 0);
    return next_month.getDate();
}
/*-------------------CALENDAR-----------------------*/
//----------------------UPCOMING-EVENTS-----------------------------------------
function upcoming_events(){
    const events_field = document.getElementById("upcoming_events");
    const current_date = new Date();
    fetch("../PHP/data.json").then(response => {
        if (!response.ok){
            throw new Error("Upcoming events datafetch error");
        }
        return response.json();
    }).then(dtb => {
        dtb.forEach((inner_array)  => {
            const entry = inner_array[0];
            const date = entry.date;
            const event_date = new Date(date);
            if ( current_date < event_date ){
                events_field.innerHTML += `<p>${entry.description}</p>
                                            <p>Standort:  ${entry.location}</p>
                                            <p>Datum:  ${entry.date}</p>
                                            <p>Veranstaltungs Art:  ${entry.type}</p>
                                            <hr>`
            }
        })
    })    
}
//----------------------UPCOMING-EVENTS-----------------------------------------
 