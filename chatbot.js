// Back-to-Top Button Functionality
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Chatbot Functionality (Placeholder)
const chatbot = document.querySelector('#chatbot');

// Show chatbot when the page loads
window.addEventListener('load', () => {
    chatbot.style.display = 'block';
});

// Placeholder interaction with chatbot
chatbot.addEventListener('click', () => {
    alert('How can I help you today?');
});
