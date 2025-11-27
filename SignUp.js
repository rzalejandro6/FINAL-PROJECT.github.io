
const form = document.getElementById('signupForm');


form.addEventListener('submit', function(e) {
    e.preventDefault();


    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password-input').value;


    if (email && password) {
        alert('You have created an account!');
        window.location.href = "LogIn.html";
    } else {
        alert('Please fill out all fields.');
    }
});


