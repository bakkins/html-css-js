console.log("Your Name");

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function logName() {
    console.log("Lauris");
}

function confirmDisable(event) {
    event.preventDefault();

    const formName = document.getElementById("name").value;
    const formEmail = document.getElementById("email").value;
    const formFeedback = document.getElementById("feedback").value;

    console.log(formName, "\n", formEmail, "\n", formFeedback);
}

// const button = document.getElementById("button");
// button.addEventListener("click", printNumbers);

// const pageTitle = document.getElementById("nameTitle");
// pageTitle.addEventListener("click", logName);

// const firstParagraph = document.querySelector("#paragraph");
// firstParagraph.parentNode.removeChild(firstParagraph);

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('form');
form.addEventListener("submit", confirmDisable);
});