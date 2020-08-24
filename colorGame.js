var colors = generateRandomColors(9);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgb = document.querySelector("#rgb");
rgb.textContent = pickedColor;
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");


reset.addEventListener("click", function(){
    colors = generateRandomColors(9);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    reset.textContent = "New Colors";
    h1.style.background = "steelblue";
})

for(var i=0; i< squares.length; i++){
    //add initial color to the squares
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked Color
        if(clickedColor === pickedColor){
            //alert("correct!");
            msg.textContent = "Correct Guess!"
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            reset.textContent = "Play Again?";
        }
        else{
            //alert("wrong!");
            this.style.backgroundColor = "#232323";
            msg.textContent = "Try Again!"
        }
    })
}
function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var ran = Math.floor(Math.random() * colors.length);
    return colors[ran];
}
function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        //get random color and push into the arr
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    //pick a "red" "green" and "blue" btw 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}