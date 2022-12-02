const darkButton = document.querySelector(".dark-btn");
const cancelButton = document.querySelector(".cancel-btn");
const saveButton = document.querySelector(".bot-btn > button");
const noteItem = document.querySelector(".my-notes-list")
const newNoteButton = document.querySelector(".top-btn > button");
let notesArray = [
    //* New notes array (will store newly created notes)
    {
        title: "note one",
        body: "this is my first note"
    },
    {
        title: "note two",
        body: "this is my second note"
    }
];

//* Adding functionality to Dark Mode button
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

//* Adding functionality to Cancel button
cancelButton.addEventListener("click", () => {
    document.querySelector(".bot-btn").classList.add("hidden");
    document.querySelector("#note-input").classList.add("hidden");
});

//* Adding functionality to New Note button
function revealNoteArea() {
    const textArea = document.querySelector("#note-input");
    const botButtons = document.querySelector(".bot-btn");
    botButtons.classList.remove("hidden");
    textArea.classList.remove("hidden");
}

function newNoteHandler() {
    const textArea = document.querySelector("#note-input");
    if (textArea.className.includes("hidden")) {
        revealNoteArea();
    } else {
        textArea.value = "";
    }
}

//* Adding functionality to Save button
function saveNotes() {
    let noteTitle = prompt("Enter a note title:");
    let noteBody = document.querySelector("#note-input").value;
    if (noteTitle !== '' && noteTitle.trim().length !== 0) {
        notesArray.push({
            title: noteTitle,
            body: noteBody
        });
        addNote();
    } else {
        alert("You must enter an appropriate title for the current note.");
    }
}

function addNote() {
    const notesList = document.querySelector(".my-notes-list");
    const listItem = document.createElement("li");
    for (let note of notesArray) {
        listItem.textContent = `${note.title}`
    };
    notesList.append(listItem)
};

//* Adding functionality to My Notes
noteItem.addEventListener("click", (event) => {
    const textArea = document.querySelector("#note-input");
    for (let note of notesArray) {
        if (note.title === event.target.textContent) {
            textArea.value = note.body
        };
    };
})

newNoteButton.addEventListener("click", newNoteHandler);
darkButton.addEventListener("click", darkThemeToggler);
saveButton.addEventListener("click", saveNotes);