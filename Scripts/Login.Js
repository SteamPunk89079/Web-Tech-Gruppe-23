





document.querySelector(".login").addEventListener("click", ()=>{
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

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
            alert("Login successfull");
            //window.location.href = "../Pages/QueryMaker.html"
        } else {
            alert("Invalid username or password");
        }
    }).catch(error => console.error("Error: "+error));
})








