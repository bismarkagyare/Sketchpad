let size = 16;

const container = document.querySelector(".container");
const sizeButton = document.querySelector(".size-btn");
const resetButton = document.querySelector(".reset-btn");
const rainbowButton = document.querySelector(".rainbow-btn");

const createGrid = (amtOfGrid) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    for (let i = 0; i < amtOfGrid; i++) {
        const widthAndHeigth = 420 / size;
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < amtOfGrid; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");

            //dynamically add width and height to the grid boxes
            gridBox.style.width = `${widthAndHeigth}px`;
            gridBox.style.height = `${widthAndHeigth}px`;
            row.appendChild(gridBox);
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black";
            }); 
        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}


createGrid(size);

sizeButton.addEventListener("click", () => {
    let userSize = Number(prompt("whats your dimension?"));
    while (userSize > 100) {
        userSize = Number(prompt("enter a number between 0 and 101"));
    }
    
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    createGrid(userSize);
});


function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}