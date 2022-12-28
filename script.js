let rgbArray = [];
for (let i = 0; i < 6; i++) {
    const randomBetween = () => Math.floor(Math.random() * (256));
    const r = randomBetween();
    const g = randomBetween();
    const b = randomBetween();
    const rgb = `rgb(${r}, ${g}, ${b})`; // Collect all to a css color string
    rgbArray.push(rgb);
}

//random between 0 and 5
const randomNumber = Math.floor(Math.random() * 6)
//random color piker 
let randomColorPicker = rgbArray[randomNumber];

// Connect to Html
// allocate the backgroundColor 
const squares = document.querySelectorAll('.square');

squares.forEach((square, i) => {
    square.style.backgroundColor = rgbArray[i]

})

// write the selected RGB color to the Html
const spanRGB = document.getElementById('color-display');
spanColor = randomColorPicker
spanRGB.innerHTML = spanColor


// event handlers
// to convert the rgb color to a format that can be used to compare
const rgbNum = (rgb) => {
    let colorArr = rgb.slice(
        rgb.indexOf("(") + 1,
        rgb.indexOf(")")
    ).split(",").join("");
    return colorArr
}

const container = document.querySelector('#container');
let life = 3;
let spanColorNum = rgbNum(spanColor); // change to comparable format

container.addEventListener('click', (e) => {

    let bccColor = e.target.style.backgroundColor;
    bccColorNum = rgbNum(bccColor) // change to comparable format

    if ((spanColorNum === bccColorNum)) {
        alert('you are winning')
        return reset()
    }
    if (life > 1) {
        e.target.style.visibility = 'hidden';
        life -= 1;
        alert(`you have now ${life} life`)
    } else {
        alert(`you are looser`)
        window.moveBy(-20, 20)
        return reset()

    }

})

//alert a message
window.onload = () => { alert(`you have ${life} life. Test yourself. Fire!`) }

// reset the game 
const reset = () => {
    window.location.reload();
}