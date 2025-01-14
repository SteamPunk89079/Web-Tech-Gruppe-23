


//------------------------------Topbar-Scripts--------------------------------
const home = document.getElementById("Home_button");
const karte = document.getElementById("Karte_button");
const aktivitaeten = document.getElementById("Aktivitaeten_button");
const kalendar = document.getElementById("Kalendar_button");
const events = document.getElementById("Events_button");
const hobbies = document.getElementById("Hobbies_button");
const theater = document.getElementById("Theater_button");

home.addEventListener("click", function(){
  window.location.href = "../index.html";
});
karte.addEventListener("click", function(){
  window.location.href = "/pages/Karte.html";
});
aktivitaeten.addEventListener("click",function(){
  window.location.href = "/pages/Aktivitäten.html";
});
kalendar.addEventListener("click", function(){
  window.location.href = "/pages/Kalendar.html";
});
events.addEventListener("click", function(){
  window.location.href = "/pages/Events.html";
});
hobbies.addEventListener("click",function(){
  window.location.href = "/pages/Hobbies.html";
});
theater.addEventListener("click", function(){
  window.location.href = "/pages/Theater.html";
});
//------------------------------Topbar-Scripts--------------------------------


const card = document.getElementById("card");
const location_selector = document.getElementById("dropdown_location");
const type_selector = document.getElementById("dropdown_type");
const filter_button = document.getElementById("filter_button");
const filter_delete_button = document.getElementById("filter_delete_button");

fetch_all_entries();





filter_button.addEventListener('click', function(){
    if (location_selector.value !== "option_0" && type_selector.value === "option_0"){
        filter_for_location(location_selector.value);
    } else if ( type_selector.value !== "option_0" && location_selector.value === "option_0"){
        filter_for_type(type_selector.value);
    }else if ( type_selector.value !== "option_0" && location_selector.value !== "option_0"){
        filter_for_both(type_selector.value, location_selector.value);
    }
})
filter_delete_button.addEventListener('click', function(){
    card.innerHTML = "";
    location_selector.value = "option_0";
    type_selector.value = "option_0";
    fetch_all_entries();
})




function filter_for_both(filter_type, filter_location){
    card.innerHTML = "";
    fetch("../PHP/data.json").then(response => {
        if ( !response.ok){
            throw new Error("both filter error");
        }
        return response.json();
    }).then(dtb => {
        let filtered_items = 0;
        dtb.forEach((inner_array, index) => {
            const entry = inner_array[0];
            if ( entry.type === filter_type && entry.location === filter_location){
                filtered_items++;
                card.innerHTML += `
                    <div class="event">
                        <p><strong>Event ${index + 1}</strong></p>
                        <p>Type: ${entry.type}</p>
                        <p>Location: ${entry.location}</p>
                        <p>Date: ${entry.date}</p>
                        <p>Description: ${entry.description}</p>
                    </div>
                    <br>`;
            }
        })
        if (filtered_items === 0 ){
            card.innerHTML = '<p>No results found for these filters</p>'
        }
        
    }).catch(error => {
        console.error(error);
        card.innerHTML = `<p> both filter error </p> `
    })

}


function filter_for_type(filter_type) {
    card.innerHTML = "";
    fetch("../PHP/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("type filter error");
            }
            return response.json();
        })
        .then(dtb => {
            let filtered_items = 0;
            dtb.forEach((inner_array, index) => {
                const entry = inner_array[0];
                if (entry.type === filter_type) {
                    filtered_items++;
                    card.innerHTML += `
                    <div class="event">
                        <p><strong>Event ${index + 1}</strong></p>
                        <p>Type: ${entry.type}</p>
                        <p>Location: ${entry.location}</p>
                        <p>Date: ${entry.date}</p>
                        <p>Description: ${entry.description}</p>
                    </div>
                    <br>`;
                }
            });

            if (filtered_items === 0){
                card.innerHTML = "<p> No events found for this type of event </p>";
            }

        })
        .catch(error => {
            console.error("type filter error");
            card.innerHTML = `<p>${error}</p>
                <br>
                <p> Error filtering by type </p> `
        });
}



function filter_for_location(filter_location){
    card.innerHTML = "";
    fetch(`../PHP/data.json`).then(response => {
        if (!response.ok){
            throw new Error("Filter malfunction");
        }
        return response.json();
    }).then(dtb => {
        let filtered_items =0;
        dtb.forEach((inner_array, index) => {
            const entry = inner_array[0];

            if (entry.location === filter_location){
                filtered_items++;
                card.innerHTML += `
                <div class="event">
                    <p><strong>Event ${index + 1}</strong></p>
                    <p>Type: ${entry.type}</p>
                    <p>Location: ${entry.location}</p>
                    <p>Date: ${entry.date}</p>
                    <p>Description: ${entry.description}</p>
                </div>
                <br>`;
            }

        });

        if( filtered_items === 0){
            card.innerHTML = `<p> No events found for this location.<p>`;
        }
    })
    .catch(error => {
        console.error("Error loading data:", error);
        card.innerHTML = `<p>Error loading events.</p>`;
    });
}




function fetch_all_entries(){
    fetch('../PHP/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON data.");
        }
        return response.json();
    })
    .then(dtb => {
        dtb.forEach((inner_array, index) => {
            const entry = inner_array[0];
            card.innerHTML += `
                <div class="event">
                    <p><strong>Event ${index + 1}</strong></p>
                    <p>Type: ${entry.type}</p>
                    <p>Location: ${entry.location}</p>
                    <p>Date: ${entry.date}</p>
                    <p>Description: ${entry.description}</p>
                </div>
                <br>`;
        });
    })
    .catch(error => {
        console.error("Error loading data:", error);
        card.innerHTML = `<p>Error loading events.</p>`;
    });
}

//-----------------------------------------------------------------------


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
//console.log(get_event_dates());

//------------------------------MAIN---------------------------------------



async function updateCalendar() {
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
        } else if ( await is_date_event(i, actual_month) ){ //PROBLEM IN THIS BRANCH
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
