// Panel switching for login/signup views
const panels = {
    default: document.getElementById('cta-default'),
    login: document.getElementById('cta-login'),
    signup: document.getElementById('cta-signup')
};

document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-view]');
    if (!trigger) return;

    const target = trigger.getAttribute('data-view');
    Object.entries(panels).forEach(([name, panel]) => {
        if (!panel) return;
        const isActive = name === target;
        panel.classList.toggle('active', isActive);
        panel.setAttribute('aria-hidden', (!isActive).toString());
    });
});

// --- Simple front-end "user database" using localStorage ---
const STORAGE_KEY = 'clique_users';

function loadUsers() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Failed to load users from localStorage', e);
        return [];
    }
}

function saveUsers(users) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
        console.error('Failed to save users to localStorage', e);
    }
}

// Handle sign up
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('inline-signup-email');
        const passwordInput = document.getElementById('inline-signup-password');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Please fill in both email and password.');
            return;
        }

        const users = loadUsers();
        const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

        if (existing) {
            alert('An account with this email already exists. Please log in instead.');
            return;
        }

        users.push({ email, password });
        saveUsers(users);

        alert('Account created successfully! You can now log in.');

        // Switch to login panel
        panels.signup.classList.remove('active');
        panels.signup.setAttribute('aria-hidden', 'true');
        panels.login.classList.add('active');
        panels.login.setAttribute('aria-hidden', 'false');
    });
}

// Handle login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('inline-login-email');
        const passwordInput = document.getElementById('inline-login-password');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        const users = loadUsers();
        const user = users.find(
            (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );

        if (!user) {
            alert('Invalid email or password. Please try again or sign up.');
            return;
        }

        // Optionally remember the logged in user
        localStorage.setItem('clique_current_user', JSON.stringify({ email: user.email }));

        // Redirect to home page
        window.location.href = 'PAGES/home.html';
    });
}


