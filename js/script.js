const darkButton = document.querySelector('.dark-btn');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (darkButton.textContent === 'Dark Theme') {
        darkButton.textContent = 'Light Theme';
    } else if (darkButton.textContent === 'Light Theme') {
        darkButton.textContent = 'Dark Theme';
    }
});