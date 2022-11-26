//* Dark button function
const darkButton = document.querySelector('.dark-btn');
darkButton.addEventListener('click', darkThemeToggler);

function darkThemeToggler() {
    document.body.classList.toggle('dark-mode');
    if (darkButton.textContent === 'Dark Theme') {
        darkButton.textContent = 'Light Theme';
    } else if (darkButton.textContent === 'Light Theme') {
        darkButton.textContent = 'Dark Theme';
    };
};

//* Cancel button function
const cancelButton = document.querySelector('.cancel-btn');

cancelButton.addEventListener('click', () => {
    document.querySelector('.bot-btn').classList.add('hidden');
    document.querySelector('#note-input').classList.add('hidden');
});

//* New Note button function
const newNoteButton = document.querySelector('.top-btn > button');

newNoteButton.addEventListener('click', () => {
    document.querySelector('.bot-btn').classList.remove('hidden');
    document.querySelector('#note-input').classList.remove('hidden');
});