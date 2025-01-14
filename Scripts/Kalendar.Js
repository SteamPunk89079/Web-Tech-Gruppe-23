const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const theater = document.getElementById("Theater_button");
const kalendar = document.getElementById("Kalendar_button");
const events = document.getElementById("Events_button");

home.addEventListener('click', function () {
    window.location.href = "../index.html";
});
karte.addEventListener('click', function () {
    window.location.href = "./Karte.html";
});
aktivitaeten.addEventListener('click', function () {
    window.location.href = "./Aktivitäten.html";
});

theater.addEventListener("click", function(){
    window.location.href = "/pages/Theater.html";})

events.addEventListener('click', function () {
    window.location.href = "./Events.html"
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
//days_left.innerHTML = `${days_remaining + 1} days left until Christmas`;
//let dates_array = get_event_dates();
console.log(get_event_dates());

//------------------------------MAIN---------------------------------------



function updateCalendar() {
//GOOD VERSION
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
        } else if ( is_date_event(i, actual_month) ){ //PROBLEM IN THIS BRANCH
            console.log("works");
            arr.push(`<div style="background-color: red; color: white;"
                    onmouseover="this.style.backgroundColor='green'; this.style.color='white';"
                    onmouseout="this.style.backgroundColor='red'; this.style.color='white';">
                        <p class="circle-paragraph">${i}</p>
                </div>`)
        } else {
            arr.push(`<p>${i}</p>`);
        }
    }
    calendar_text.innerHTML = arr.join("");
    month_text.innerHTML = month_name;
}

/*
function is_date_event(day, month) {
    let dates_array = get_event_dates();
    for (let date of dates_array) {
        let [year, month_str, day_str] = date.split("-");
        console.log(date);

        let event_date = new Date(year, month_str - 1, day_str);

        console.log(event_date.getDate());

        if (event_date.getDate() === day && event_date.getMonth() + 1 === month) {
            console.log("true")
            return true; 
        }
    }
    console.log("false") 
    return false;
}*/

function get_event_dates(){
    let date_event_arr = [];
    fetch(`../PHP/data.json`).then(response => {
        if (!response.ok){
            throw new Error("Filter malfunction");
        }
        return response.json();
    }).then(dtb => {
        dtb.forEach((inner_array) => {
            const entry = inner_array[0];

            date_event_arr.push(entry.date);
        });
    })
    .catch(error => {
        console.error("Error loading data:", error);
        card.innerHTML = `<p>Error loading events.</p>`;
    });
    return date_event_arr;
}

function is_date_event(day, month) {
    let dates_array = get_event_dates();
    let valid = false;
    dates_array.forEach(my_date => {
        let [year, month_str, day_str] = my_date.split("-");
        console.log(date);
        let event_date = new Date(year, month_str - 1, day_str);
        console.log(event_date.getDate());
        if (event_date.getDate() === day && event_date.getMonth() + 1 === month) {
            console.log("true")
            valid = true; 
        }
    })
    return valid;
}



function get_days_in_month(year, month) {
    const next_month = new Date(year, month + 1, 0);
    return next_month.getDate();
}







//--------------------------DEADLINE---------------------
const deadline = new Date(today.getFullYear(), 11, 25);
if (today > deadline) {
    deadline.setFullYear(today.getFullYear() + 1);
}
const time_diff = deadline - today;
const days_remaining = Math.floor(time_diff / (1000 * 3600 * 24));
//--------------------------DEADLINE---------------------







//UPDATE_CALENDAR() SAVE
/*
function updateCalendar() {
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
        } else {
            arr.push(`<p>${i}</p>`);
        }
    }
    calendar_text.innerHTML = arr.join("");
    month_text.innerHTML = month_name;
}
*/
