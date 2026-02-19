console.log("JS Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        // to check in console if the form is found
        console.log("Login form found"); 

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("Login Attempt:");
            console.log("Email:", email);
            console.log("Password:", password);
        });
    }
});
