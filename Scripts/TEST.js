




let arr = require("../PHP/data.json").data;

function location_filter(location){
    return arr.filter(query => query.location === location);
}

function type_filter(location){
    return arr.filter(query => query.location === location);
}

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