// Select the login form
const form = document.querySelector('.login-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if both fields are filled
    if (email && password) {
        alert("You have successfully logged in!");
        window.location.href = "HOMEPAGE.html"; // Redirect to homepage
    } else {
        alert("Please fill out all fields.");
    }
});
