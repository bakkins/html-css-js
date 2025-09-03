console.log("Your Name");

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

window.onload = printNumbers;

const button = document.getElementById("button");
button.addEventListener("click", printNumbers);