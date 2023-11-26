let player1Points = 0;
let player2Points = 0;

function naechsteRunde() {
  spielen();
}

function spielen() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins the round!";
    player1Points++;
    document.getElementById("player1Points").textContent = player1Points;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins the round!";
    player2Points++;
    document.getElementById("player2Points").textContent = player2Points;
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }


  if (player1Points === 10 || player2Points === 10) {
    // Zeigt den Gewinner an und beendet das Spiel
    if (player1Points === 10) {
      document.querySelector("h1").innerHTML = "Player 1 has won the game!";

    } else {
      document.querySelector("h1").innerHTML = "Player 2 has won the game!";
    }
    // Deaktiviert den Button, um weitere Runden zu verhindern
    document.querySelector("button").setAttribute("disabled", "disabled");
  }
}

document.addEventListener("keydown", function(event) {
    if (event.keypress === 32) { // Tastencode für Leertaste ist 32
      naechsteRunde(); // Startet die nächste Runde bei Leertaste
    }
  });