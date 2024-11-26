const card = document.getElementById("card");
const location_selector = document.getElementById("dropdown_location");
const type_selector = document.getElementById("dropdown_type");
const filter_button = document.getElementById("filter_button");





filter_button.addEventListener('click', function(){
    if (location_selector.value !== "option_0" && type_selector.value === "option_0"){
        filter_for_location(location_selector.value);
    }
})
filter_delete_button.addEventListener('click', function(){
    card.innerHTML = "";
    fetch_all_entries();
})




fetch_all_entries();




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