const card = document.getElementById("card");

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
                <hr>`;
        });
    })
    .catch(error => {
        console.error("Error loading data:", error);
        card.innerHTML = `<p>Error loading events.</p>`;
    });