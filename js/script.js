//* Dark button function
const darkButton = document.querySelector('.dark-btn');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (darkButton.textContent === 'Dark Theme') {
        darkButton.textContent = 'Light Theme';
    } else if (darkButton.textContent === 'Light Theme') {
        darkButton.textContent = 'Dark Theme';
    };
});

//* Cancel button function
const cancelButton = document.querySelector('.cancel-btn');

cancelButton.addEventListener('click', () => {
    let cancelButton = document.querySelector('.bot-btn').classList.add('hidden');
    let textArea = document.querySelector('#note-input').classList.add('hidden');
});

console.log(cancelButton);
//* New Note button function


