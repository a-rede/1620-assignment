//* Dark button function
const darkButton = document.querySelector('.dark-btn');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (darkButton.textContent === 'Dark Theme') {
        darkButton.textContent = 'Light Theme';
    } else if (darkButton.textContent === 'Light Theme') {
        darkButton.textContent = 'Dark Theme';
    }
});

//* Cancel button function
const cancelButton = document.querySelector('.cancel-btn');

cancelButton.addEventListener('click', () => {
    document.querySelector('.bot-btn').classList.add('hidden');
    document.querySelector('#note-input').classList.add('hidden');
});