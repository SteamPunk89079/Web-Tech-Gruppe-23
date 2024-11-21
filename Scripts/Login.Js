



const username = document.getElementById("username");
const password = document.getElementById("password");
const login_button = document.getElementById("login_button");

const login_status = document.getElementById("login_status")





login_button.addEventListener('click', function(){

    const username_value = username.value.trim();
    const password_value = password.value.trim();

    if (username_value === "" || username_value === undefined ){
        login_status.innerHTML = `enter username`;
    }else if ( password_value === "" || password_value === undefined){
        login_status.innerHTML = `enter password`;
    }else if ( password_value === "admin" && username_value === "admin"){
        window.location.href = "../Pages/QueryMaker.html"
    }

});











