var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);


var imgElement1 = document.querySelector("img.img1");
var imgElement2 = document.querySelector("img.img2");

var imageName1 = "dice" + randomNumber1 + ".png";
var imageName2 = "dice" + randomNumber2 + ".png";

var imagePath1 = "images/" + imageName1;
var imagePath2 = "images/" + imageName2;


imgElement1.setAttribute("src", imagePath1);
imgElement2.setAttribute("src", imagePath2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";

} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";

};