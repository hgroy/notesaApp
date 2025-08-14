import { renderNotes } from "./app.js";

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display");
let showOtherNotes= document.querySelector(".notes-container");
let showPinnedNotes= document.querySelector(".pinned-notes-display");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

// for adding notes on clicking the + button

addNoteButton.addEventListener("click", ()=> {
    if(note.value.trim().length > 0 || title.value.trim().length > 0){
        arrayOfNotes = [...arrayOfNotes, {id: Date.now(), title: title.value.trim(), note:note.value.trim(), isPinned:false, isArchived:false}];
        note.value = title.value = "";
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
        localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
    }

    // console.log(arrayOfNotes); // checking  it is working or not 
});

showOtherNotes.innerHTML = renderNotes(arrayOfNotes);


// pinned parts 




