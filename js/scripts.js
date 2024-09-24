// Example JavaScript for responsive navbar toggle (optional)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('nav-toggle');
    toggleButton.innerHTML = '&#9776;'; // Hamburger icon

    document.querySelector('.navbar .container').insertBefore(toggleButton, navLinks);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
