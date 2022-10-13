let color = "black";

document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
    const sizeButton = document.querySelector(".size-btn");
    sizeButton.addEventListener("click", () => {
        let size = getSize();
        const container = document.querySelector(".container");
        removeAllChildNodes(container);
        createGrid(size);
    });
});


function createGrid(size) {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.addEventListener("mouseover", colorGrid)
        // div.addEventListener("mouseenter", () => {
        //     div.style.backgroundColor = "black";
        // });
        container.appendChild(div);
    }
}

function getSize() {
    let input = prompt("enter your dimension?");
    const message = document.querySelector(".message");

    if (input == "") {
        message.innerHTML = "please enter a valid number!";
    } else if (input <= 0 || input > 100) {
        message.innerHTML = "please enter a number between 0 and 101";
    } else {
        message.innerHTML = "now you can sketch!"
        return input;
    }
}

function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function colorGrid () {
    if (color == "random") {
        this.style.backgroundColor = getRandomColor();
    } else {
        this.style.backgroundColor = "black";
    }
}

function setColor (colorChoice) {
    color = colorChoice;
}

function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function reset () {
    const divs = document.querySelectorAll("div");
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
}