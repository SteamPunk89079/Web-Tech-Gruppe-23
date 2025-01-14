

const label = document.getElementById("status_message");



document.getElementById("login_button").addEventListener("click", ()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const credentials = {
        username: username,
        password: password
    };

    fetch("../PHP/users.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json())
    .then(data => {
        if (data.status === "success"){
            alert("SUCCESS");
            window.location.href = "../Pages/QueryMaker.html"
        } else {
            alert("Invalid username or password");
            label.innerHTML = '<p> Wrong username or password </p>'
            username.value = "";
            password.value = "";
        }
    }).catch(error => console.error("Error: "+error));
})








