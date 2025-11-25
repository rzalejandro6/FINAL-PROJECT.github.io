// Select the contact form
const form = document.getElementById('contactForm');

// Listen for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get values from input fields
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if both fields are filled
    if (email && message) {
        alert('Your message has been sent!');
        form.reset(); 
        
    // Clear the form fields
    } else {
        alert('Please fill out both fields.');
    }
});
