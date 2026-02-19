console.log("JS Loaded");

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const LoginForm = document.getElementById("LoginForm");

    // Only run if we're on the login page
    if (LoginForm) {

        LoginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // stop page refresh

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("Login Attempt:");
            console.log("Email:", email);
            console.log("Password:", password);
        });

    }
});
