// Select the signup form
const form = document.getElementById('signupForm');

// Listen for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password-input').value;

    // Check if both fields are filled
    if (email && password) {
        alert('You have created an account!');
        window.location.href = "LogIn.html"; // Redirect to login page
    } else {
        alert('Please fill out all fields.');
    }
});

