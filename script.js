// Simple theme toggle functionality
const html = document.documentElement;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme');
const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && osDarkMode)) {
    html.classList.add('dark');
}

// Basic smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
