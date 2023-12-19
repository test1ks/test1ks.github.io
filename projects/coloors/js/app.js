const cols = document.querySelectorAll(".col");

// Add listener for backspace
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code.toLocaleLowerCase() === "space") {
        setRandomColors();
    }
});

// Add listener for lock and copy
document.addEventListener("click", (event) => {
    const type = event.target.dataset.type;
    if (type === "lock") {
        const node =
            event.target.tagName.toLowerCase() === "i"
                ? event.target
                : event.target.children[0];
        node.classList.toggle("fa-lock-open");
        node.classList.toggle("fa-lock");
    } else if (type === "copy") {
        copyToClickboard(event.target.textContent);
    }
});

// //Generate random color ----------------------------------
// function generateRandomColor() {
//     const hexCodes = "0123456789ABCDEF";
//     let color = "";
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//     }
//     return "#" + color;
// }

function copyToClickboard(text) {
    return navigator.clipboard.writeText(text);
}

function setRandomColors(isInitial) {
    const colors = isInitial ? getColorsFromHash() : [];

    cols.forEach((col, index) => {
        const isLocked = col.querySelector("i").classList.contains("fa-lock");
        const text = col.querySelector("h2");
        const button = col.querySelector("button");

        if (isLocked) {
            colors.push(text.textContent);
            return;
        }
        //Generate random color with chroma.js
        const color = isInitial
            ? colors[index]
                ? colors[index]
                : chroma.random()
            : chroma.random();

        if (!isInitial) {
            colors.push(color);
        }

        text.textContent = color;
        col.style.background = color;

        setTextColor(text, color);
        setTextColor(button, color);
    });
    updateColorsHash(colors);
}

// Invert color
function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? "black" : "white";
}

function updateColorsHash(colors = []) {
    document.location.hash = colors
        .map((col) => {
            return col.toString().substring(1);
        })
        .join("-");
}

function getColorsFromHash() {
    if (document.location.hash.length > 1) {
        return document.location.hash
            .substring(1)
            .split("-")
            .map((color) => "#" + color);
    }
    return [];
}

setRandomColors(true);

// ------------------------------------------------------------------------
