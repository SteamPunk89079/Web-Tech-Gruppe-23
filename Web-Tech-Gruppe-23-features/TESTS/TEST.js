
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

console.log(is_date_event(20,11));