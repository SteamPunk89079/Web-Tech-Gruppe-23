





const type_selector = document.getElementById("dropdown_type");
const location_selector = document.getElementById("dropdown_location");
const date_selector = document.getElementById("date_selector");
const description_field = document.getElementById("description_area");
const save_event_button = document.getElementById("save_event_button");

const test = document.getElementById("test");




save_event_button.addEventListener('click', function(){

    let query = [];

    if (type_selector.value !== "option_0" 
        && location_selector.value !== "option_0"
        && date_selector.value !== ""
        && description_field.value !== ""){
        
        query.push({
            type: type_selector.value,
            location: location_selector.value,
            date: date_selector.value,
            description: description_field.value
        });

        const json_data = JSON.stringify(query);
        
        fetch('../PHP/save_json.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: json_data
        }).then(response => response.json()).then(data => {
            console.log("succesfull: ", data);
            test.innerHTML = "Data saved succesfully!";
        }).catch(error => {
            console.error("ERROR: ", error);
            test.innerHTML = "Error saving data.";
        });


    }else{
        test.innerHTML = "fill all fields";
    }

});



