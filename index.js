import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; 

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

const appSettings = {
    databaseURL: "https://reel-app-e1bcd-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
console.log(app);

const database = getDatabase(app);
const moviesInDB = ref(database, "movies");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;

    if (inputValue.trim() !== "") { 
        push(moviesInDB, inputValue); 
        console.log(`${inputValue} added to database`);
        inputFieldEl.value = ""; 
    } else {
        console.log("Input field is empty. Please enter a value.");
    }
});