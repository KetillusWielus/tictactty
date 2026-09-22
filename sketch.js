// bericht naar mezelf: maak een tui style bord.
let playerTurn = 1;
let timer = 0;
let timer2 = 0

let playerPosX = 100;
let playerPosY = 100;

// alle mogelijke posities van vakjes
let squarePos1 = 100;
let squarePos2 = 300;
let squarePos3 = 500;

let winMessages = ["The enemy ate a bad cheese, so", "The enemy really tried, but", "The enemy has a big skill issue, so", "You disgusting freak, ofcourse",
  "The cow outside claimed you cheated, but fine", "Okay do I have to generate some stupid message again. Guess what I won't,", "You won, you really don't have a life, do you? Okay",
  "Dang, I lost all my money betting on the other guy, but", "Don't tell me it's fine you lost, you're holding back your tears, all because", 
  "Liar the opponent won, wait why am I lying, lmao"
];

let tieMessages = ["Nobody won, why?", "Could this be more boring?","You were so sure you were going to win, what happened?",
  "You can't claim anything,"
];

let Messages = ""

let playerColor = "white";
let square1Color = "white";
let square2Color = "white";
let square3Color = "white";
let square4Color = "white";
let square5Color = "white";
let square6Color = "white";
let square7Color = "white";
let square8Color = "white";
let square9Color = "white";

let gameIsWonBlue = false;
let gameIsWonRed = false;
let isTie = false;


function setup() {
  createCanvas(600, 600);
  Messages = random(winMessages);
  AngerMessages = random(tieMessages);
}

function keyPressed() {
 if (gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
  if (keyCode === (37)) {
    if (playerPosX === squarePos1) {
      playerPosX === squarePos3;
      timer = 0;
      playerColor = "black";
    } else {
      playerPosX -= 200;
    }
  }

  if (keyCode === (38)) {
     if (playerPosY === squarePos1) {
      playerPosY === squarePos3;
      timer = 0;
      playerColor = "black";
    } else {
      playerPosY -= 200;
    }
  }

  if (keyCode === (39)) {
     if (playerPosX === squarePos3) {
      playerPosX === squarePos1;
      timer = 0;
      playerColor = "black";
    } else {
      playerPosX += 200;
    }
  }

  if (keyCode === (40)) {
     if (playerPosY === squarePos3) {
      playerPosY === squarePos1;
      timer = 0;
      playerColor = "black";
    } else {
      playerPosY += 200;
    }
  }

  if (keyCode === ENTER) {
    if (playerPosX == squarePos1 && playerPosY == squarePos1 && square1Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square1Color = "red";
        playerTurn += 1;
      } else {
        square1Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos1 && playerPosY == squarePos2 && square2Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square2Color = "red";
        playerTurn += 1;
      } else {
        square2Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos1 && playerPosY == squarePos3 && square3Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square3Color = "red";
        playerTurn += 1;
      } else {
        square3Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos2 && playerPosY == squarePos1 && square4Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square4Color = "red";
        playerTurn += 1;
      } else {
        square4Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos2 && playerPosY == squarePos2 && square5Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square5Color = "red";
        playerTurn += 1;
      } else {
        square5Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos2 && playerPosY == squarePos3 && square6Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square6Color = "red";
        playerTurn += 1;
      } else {
        square6Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos3 && playerPosY == squarePos1 && square7Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square7Color = "red";
        playerTurn += 1;
      } else {
        square7Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos3 && playerPosY == squarePos2 && square8Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square8Color = "red";
        playerTurn += 1;
      } else {
        square8Color = "blue";
        playerTurn = 1;
      }
    } if (playerPosX == squarePos3 && playerPosY == squarePos3 && square9Color == "white" && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square9Color = "red";
        playerTurn += 1;
      } else {
        square9Color = "blue";
        playerTurn = 1;
      }
    } 
  }
 } else {
  if (keyCode === ENTER) {
    Messages = random(winMessages);
    AngerMessages = random(tieMessages);
    square1Color = "white";
    square2Color = "white";
    square3Color = "white";
    square4Color = "white";
    square5Color = "white";
    square6Color = "white";
    square7Color = "white";
    square8Color = "white";
    square9Color = "white";
    gameIsWonBlue = false;
    gameIsWonRed = false;
    isTie = false;
    playerTurn = 1;
  }
 }
}


function draw() {
  if (gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
  background("black");
  fill("white");
  rect(0,0,600,20);

  textSize("13");
  fill("black");
  text("Boter kaas en eieren        1.0.0",20,15);
  
  strokeWeight(0);

  //bord

  fill(square1Color);
  square(squarePos1-75,squarePos1-75,150);

  fill(square2Color);
  square(squarePos1-75,squarePos2-75,150);

  fill(square3Color);
  square(squarePos1-75,squarePos3-75,150);

  fill(square4Color);
  square(squarePos2-75,squarePos1-75,150);

  fill(square5Color);
  square(squarePos2-75,squarePos2-75,150);

  fill(square6Color);
  square(squarePos2-75,squarePos3-75,150);

  fill(square7Color);
  square(squarePos3-75,squarePos1-75,150);

  fill(square8Color);
  square(squarePos3-75,squarePos2-75,150);

  fill(square9Color);
  square(squarePos3-75,squarePos3-75,150);

  //speler
  if (timer === 60) {
    if (playerColor == "white") {
      playerColor = "black";
      timer = 0;
    } else {
      playerColor = "white";
       timer = 0;
    }
  }

  fill(playerColor);
  rect(playerPosX -30,playerPosY -25,20,50);

  //win checker
  
  //diagonalen 
  
  if (square1Color == "red" && square5Color == "red" && square9Color == "red"){
    square1Color = "black";
    square5Color = "black";
    square9Color = "black";
    gameIsWonRed = true;
  } 
  if (square1Color == "blue" && square5Color == "blue" && square9Color == "blue"){
    square1Color = "black";
    square5Color = "black";
    square9Color = "black";
    gameIsWonBlue = true;
  }
  if (square3Color == "red" && square5Color == "red" && square7Color == "red"){
    square3Color = "black";
    square5Color = "black";
    square7Color = "black";
    gameIsWonRed = true;
  }

  if (square3Color == "blue" && square5Color == "blue" && square7Color == "blue" ){
    square3Color = "black";
    square5Color = "black";
    square7Color = "black";
    gameIsWonBlue = true;
  }

  // horizontaal

  if (square1Color == "red" && square2Color == "red" && square3Color == "red"){
    square1Color = "black";
    square2Color = "black";
    square3Color = "black";
    gameIsWonRed = true;
  } 
  if (square1Color == "blue" && square2Color == "blue" && square3Color == "blue"){
    square1Color = "black";
    square2Color = "black";
    square3Color = "black";
    gameIsWonBlue = true;
  }
  if (square4Color == "red" && square5Color == "red" && square6Color == "red"){
    square4Color = "black";
    square5Color = "black";
    square6Color = "black";
    gameIsWonRed = true;
  } 
  if (square4Color == "blue" && square5Color == "blue" && square6Color == "blue" ){
    square4Color = "black";
    square5Color = "black";
    square6Color = "black";
    gameIsWonBlue = true;
  }
  if (square7Color == "red" && square8Color == "red" && square9Color == "red"){
    square7Color = "black";
    square8Color = "black";
    square9Color = "black";
    gameIsWonRed = true;
  } 
  if (square7Color == "blue" && square8Color == "blue" && square9Color == "blue" ){
    square7Color = "black";
    square8Color = "black";
    square9Color = "black";
    gameIsWonBlue = true;
  }

  //verticaal

 if (square1Color == "red" && square4Color == "red" && square7Color == "red"){
    square1Color = "black";
    square4Color = "black";
    square7Color = "black";
   gameIsWonRed = true;
  } 
  if (square1Color == "blue" && square4Color == "blue" && square7Color == "blue"){
    square1Color = "black";
    square4Color = "black";
    square7Color = "black";
    gameIsWonBlue = true;
  }
  if (square2Color == "red" && square5Color == "red" && square8Color == "red"){
    square2Color = "black";
    square5Color = "black";
    square8Color = "black";
    gameIsWonRed = true;
  } 
  if (square2Color == "blue" && square5Color == "blue" && square8Color == "blue" ){
    square2Color = "black"
    square5Color = "black"
    square8Color = "black"
    gameIsWonBlue = true;
  }
  if (square3Color == "red" && square6Color == "red" && square9Color == "red"){
    square3Color = "black"
    square6Color = "black"
    square9Color = "black"
    gameIsWonRed = true;
  } 
  if (square3Color == "blue" && square6Color == "blue" && square9Color == "blue" ){
    square3Color = "black"
    square6Color = "black"
    square9Color = "black"
    gameIsWonBlue = true;
  }

  if (square1Color != "white" && square2Color != "white" && square3Color != "white" && square4Color != "white" && square5Color != "white" && square6Color != "white" && square7Color != "white" && square8Color != "white" && square9Color != "white" && gameIsWonBlue == false && gameIsWonRed == false) {
    isTie = true;
  }
  
  timer += 1;
  timer2 +=1;

} else {
  background("black");
  fill("white");
  textSize(16);
  text("[kjeld@nixos:~]$ boterkaaseneieren",20,20);
  text("[kjeld@nixos:~]$ ",20,110);

  if (gameIsWonBlue == true) {
    text ("blue won!",20,80); 
    text(Messages, 20, 50);
  } else if (gameIsWonRed == true) {
    text("red won!",20,80);
    text(Messages, 20,50);
  } else if (isTie == true) {
    text("You tied!",20,80);
    text(AngerMessages,20,50);
  }
 } 
}

//function mouseReleased() {
//  if (mouseButton === "right") {
//
//  }
//}