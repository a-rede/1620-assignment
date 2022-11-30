//* Dark button function
const darkButton = document.querySelector(".dark-btn");
darkButton.addEventListener("click", darkThemeToggler);

function darkThemeToggler() {
    document.body.classList.toggle("dark-mode");
    changeBtnText();
}

function changeBtnText() {
    if (darkButton.textContent === "Dark Theme") {
        darkButton.textContent = "Light Theme";
    } else if (darkButton.textContent === "Light Theme") {
        darkButton.textContent = "Dark Theme";
    }
}

//* Cancel button function
const cancelButton = document.querySelector(".cancel-btn");

cancelButton.addEventListener("click", () => {
    document.querySelector(".bot-btn").classList.add("hidden");
    document.querySelector("#note-input").classList.add("hidden");
});

//* New Note button function
const newNoteButton = document.querySelector(".top-btn > button");
const textArea = document.querySelector("#note-input");
const botButtons = document.querySelector(".bot-btn");

newNoteButton.addEventListener("click", newNoteHandler);

function revealNoteArea() {
    botButtons.classList.remove("hidden");
    textArea.classList.remove("hidden");
}

function newNoteHandler() {
    if (textArea.className.includes("hidden")) {
        revealNoteArea();
    } else {
        textArea.value = "";
    }
}

//* New notes array (stores newly created notes)
let notesArray = [
    {
        title: "note one",
        body: "this is my first note",
    },
];

//* Save button function
const saveButton = document.querySelector(".bot-btn > button");
const notesList = document.querySelector('.my-notes-list');
saveButton.addEventListener("click", saveNotes);

function saveNotes() {
    let noteTitle = prompt("Enter note title:");
    let noteBody = document.querySelector("#note-input").value;

    // Saves note information in an array of objects
    notesArray.push({
        title: noteTitle,
        body: noteBody,
    });
    updateMyNotes();
};

function updateMyNotes() {
    const listItem = document.createElement('li');
    for (let note of notesArray) {
        listItem.textContent = `${note.title}`;
    }
    notesList.append(listItem);
}