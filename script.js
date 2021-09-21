function randomColor() {
    //generate a random color
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    let colorCode = document.getElementById("colorCode");
    colorCode.innerHTML = randomColor;
}
randomColor()
let btn = document.getElementById("newColor");
btn.addEventListener("click", randomColor, false);