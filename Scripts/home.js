// Protect this page: only allow access if a user is logged in
(function enforceAuthentication() {
    const currentUser = localStorage.getItem('clique_current_user');
    if (!currentUser) {
        window.location.href = '../index.html';
    }
})();

// Handle logout interactions
document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('logout-link');
    if (!logoutLink) return;

    logoutLink.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('clique_current_user');
        window.location.href = '../index.html';
    });
});

