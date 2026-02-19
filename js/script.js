console.log("JS Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        // to check in console if the form is found
        console.log("Login form found"); 

        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("https://u6vo5p5cx5ngbu4x7n7l3sfhne0ilsmf.lambda-url.us-east-1.on.aws/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })     
            });

            const data = await response.json();
            console.log("Server says", data);
            alert(data.message);

        });
    }
});
