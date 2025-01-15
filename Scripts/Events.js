


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





filter_button.addEventListener('click',function(){
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






