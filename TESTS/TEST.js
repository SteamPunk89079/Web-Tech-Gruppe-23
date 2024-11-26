



/*
const arr = require("../PHP/data.json").data;

arr.forEach(element => {
    console.log(element);
});
*/
console.log(is_date_event(26, 11));




function get_event_dates(){
    let date_event_arr = [];
    fetch('../TESTS/data.json').then(response => {
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
    });

    return date_event_arr;
}


function is_date_event(day, month) {
    let dates_array = get_event_dates();
    for (let date of dates_array) {
        let local_date = date.split("-");
        let my_date = new Date(local_date[0], local_date[1] - 1, local_date[2]); // Subtract 1 from month since Date is 0-indexed.
        
        if ((my_date.getMonth() + 1 === month) && parseInt(local_date[2]) === day) {
            return true;
        }
    }
    return false; 
}









