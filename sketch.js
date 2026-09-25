// bericht naar mezelf: maak een tui style bord.
let playerTurn = 1;
let timer = 0;
let timer2 = 0
let botVar = 1;

// alle mogelijke posities van vakjes
let squarePos1 = 100;
let squarePos2 = 300;
let squarePos3 = 500;

let botTalk = 0;

//berichten aan het einde van een potje
let winMessages = ["The enemy ate a bad cheese, so", "The enemy really tried, but", "The enemy has a big skill issue, so", "You disgusting freak, ofcourse",
  "The cow outside claimed you cheated, but fine", "Okay do I have to generate some stupid message again. Guess what I won't,", "You won, you really don't have a life, do you? Okay",
  "Dang, I lost all my money betting on the other guy, but", "Don't tell me it's fine you lost, you're holding back your tears, all because", 
  "Liar the opponent won, wait why am I lying, lmao"
];

let tieMessages = ["Nobody won, why?", "Could this be more boring?","You were so sure you were going to win, what happened?",
  "You can't claim anything,"
];

let botMessages = [ "Get skill issued", "I'm fine", "You just lost", "checkmate", "Me smarter"];
let negativeBotMessages = ["UAAAAGH", "I'm not losing", "I'm fine", "Enough", "nooo000110011110"];
let statusList = ["OK", "But just OK"];
let statusMessagesPositive = ["You did so well the bot has suffered", "I think we've found the greatest player"];
let statusMessagesOK = ["You did well and the bot enjoyed it", "ehh passable","You are a little bit better"];
let statusMessagesNegative = ["The bot did not think you were it", "How did you lost this much aura", "The bot got bored"];

let winMessage = "";
let tieMessage = "";
let botMessage  = "";
let negativeBotMessage = "";
let okStatus = "";
let statusMessageNegative = "";
let statusMessagePositive = "";
let statusMessageOK = "";


let randomSquare = 1;

//kleuren
let square1Color = "black";
let square2Color = "black";
let square3Color = "black";
let square4Color = "black";
let square5Color = "black";
let square6Color = "black";
let square7Color = "black";
let square8Color = "black";
let square9Color = "black";

let asciiColor = ""

// booleans
let gameIsWonBlue = false;
let gameIsWonRed = false;
let isTie = false;
let gameIsStarted = false;
let withBot = false;



function setup() {
  createCanvas(600, 600);
}


function keyPressed() {
 if (gameIsWonBlue == false && gameIsWonRed == false && isTie == false && gameIsStarted == true) {
 // was ooit voor pijltjes toetsen
 } else {
  if (keyCode === ENTER) {
    winMessage = random(winMessages);
    tieMessage = random(tieMessages);
    square1Color = "black";
    square2Color = "black";
    square3Color = "black";
    square4Color = "black";
    square5Color = "black";
    square6Color = "black";
    square7Color = "black";
    square8Color = "black";
    square9Color = "black";
    gameIsWonBlue = false;
    gameIsWonRed = false;
    isTie = false;
    playerTurn = 1;
    withBot = false;
    gameIsStarted = true;
  } if (keyCode === 32) {
    tieMessage = random(tieMessages);
    okStatus = random(statusList);
    statusMessageNegative = random(statusMessagesNegative);
    statusMessagePositive = random(statusMessagesPositive);
    statusMessageOK = random(statusMessagesOK);
    square1Color = "black";
    square2Color = "black";
    square3Color = "black";
    square4Color = "black";
    square5Color = "black";
    square6Color = "black";
    square7Color = "black";
    square8Color = "black";
    square9Color = "black";
    gameIsWonBlue = false;
    gameIsWonRed = false;
    isTie = false;
    playerTurn = 1;
    botTalk = 0;
    withBot = true;
    gameIsStarted = true;
  }
 }
}

function draw() {
  if (gameIsWonBlue == false && gameIsWonRed == false && isTie == false && gameIsStarted == true ) {
  background("black");
  fill("white");
  rect(0,0,600,20);

  textSize(13);
  fill("black");
  text("Tic Tac TTY       1.1.1",20,15);
  
  strokeWeight(0);

  //bots
  if (withBot == true) {
    if (playerTurn == 2) {
      if (timer == 30) {
      randomSquare = random(1,9);
      randomSquare = round(randomSquare);
        if (randomSquare == 1 && square1Color == "black") {
          square1Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 1 && square1Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 2 && square2Color == "black") {
           square2Color = "blue";
           botVar = random(5);
           botVar = round(botVar);
           botTalk = 1;
           playerTurn = 1;
        } else if  (randomSquare == 2 && square2Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 3 && square3Color == "black") {
          square3Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 3 && square3Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 4 && square4Color == "black") {
          square4Color = "blue";
           botVar = random(5);
           botVar = round(botVar);
           botTalk = 1;
           playerTurn = 1;
        } else if  (randomSquare == 4 && square4Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 5 && square5Color == "black") {
          square5Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 5 && square5Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 6 && square6Color == "black") {
          square6Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 6 && square6Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 7 && square7Color == "black") {
          square7Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 7 && square7Color != "black") {
          randomSquare += 1;
          playerTurn = 1;
        } if (randomSquare == 8 && square8Color == "black") {
          square8Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 8 && square8Color != "black") {
          randomSquare += 1;
        } if (randomSquare == 9 && square9Color == "black") {
          square9Color = "blue";
          botVar = random(5);
          botVar = round(botVar);
          botTalk = 1;
          playerTurn = 1;
        } else if  (randomSquare == 9 && square9Color != "black") {
          randomSquare = 1;
        } else {
          randomSquare = 1;
        }
        timer = 0;
      } else {
        timer += 1;
      }
    }
  }

  //pratende bot
  fill("white")
  if (withBot == true) {
    if (botVar >= 4) {
      if (botTalk == 1) {
        negativeBotMessage = random(negativeBotMessages);
        botMessage = random(botMessages);
        botTalk = 2;
      } else if (botTalk == 2) {
        if (playerTurn == 1) {
        text("(" + negativeBotMessage + ")  ->",450,50);
        timer2 += 1
        } else {
          text("(" + botMessage + ")  ->",450,50);
          timer2 += 1
       
        }
      }
     }
  }

  if (timer2 == 60) {
    botTalk = 0;
    timer2 = 0
  }

  //bord
  if (playerTurn == 1) {
    asciiColor = "red";
  } else {
    asciiColor = "blue";
  }
  
  fill(asciiColor);
  textSize(100);
  text("  #   #  ",150,squarePos1 + 40);
  text("########",75,squarePos1 + 140);
  text("  #   #  ",150,squarePos1 + 240);
  text("########",75,squarePos1 + 340);
  text("  #   #  ",150,squarePos1 + 440);

  // eerste rij
  if (square1Color == "red") {
    fill(square1Color);
    text("X",squarePos1 + 10,squarePos1 + 40);
    } else if (square1Color == "blue") {
    fill(square1Color);
    text("O",squarePos1 + 5,squarePos1 + 40);
  } 

  if (square2Color == "red") {
    fill(square2Color);
    text("X",squarePos1 + 10,squarePos1 + 240);
  } else if (square2Color == "blue") {
    fill(square2Color);
    text("O",squarePos1 + 5,squarePos1 + 240);
  } 

  if (square3Color == "red") {
    fill(square3Color);
    text("X",squarePos1 + 10,squarePos1 + 440);
  } else if (square3Color == "blue") {
    fill(square3Color);
    text("O",squarePos1 + 5,squarePos1 + 440);
  } 

  //tweede rij
  if (square4Color == "red") {
    fill(square4Color);
    text("X",squarePos1 + 170,squarePos1 + 40);
    } else if (square4Color == "blue") {
    fill(square4Color);
    text("O",squarePos1 + 165,squarePos1 + 40);
  } 

  if (square5Color == "red") {
    fill(square5Color);
    text("X",squarePos1 + 170,squarePos1 + 240);
  } else if (square5Color == "blue") {
    fill(square5Color);
    text("O",squarePos1 + 165,squarePos1 + 240);
  } 

  if (square6Color == "red") {
    fill(square6Color);
    text("X",squarePos1 + 170,squarePos1 + 440);
  } else if (square6Color == "blue") {
    fill(square6Color);
    text("O",squarePos1 + 165,squarePos1 + 440);
  } 

  //derde rij
   if (square7Color == "red") {
    fill(square7Color);
    text("X",squarePos1 + 330,squarePos1 + 40);
    } else if (square7Color == "blue") {
    fill(square7Color);
    text("O",squarePos1 + 325,squarePos1 + 40);
  } 

  if (square8Color == "red") {
    fill(square8Color);
    text("X",squarePos1 + 330,squarePos1 + 240);
  } else if (square8Color == "blue") {
    fill(square8Color);
    text("O",squarePos1 + 325,squarePos1 + 240);
  } 

  if (square9Color == "red") {
    fill(square9Color);
    text("X",squarePos1 + 330,squarePos1 + 440);
  } else if (square9Color == "blue") {
    fill(square9Color);
    text("O",squarePos1 + 325,squarePos1 + 440);
  } 

  //hover effect
   fill("grey");
      if (square1Color == "black" && mouseX >= squarePos1 - 35 && mouseX <= squarePos1 + 85 && mouseY >= squarePos1 - 35 && mouseY <= squarePos1 + 55 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
      if (playerTurn == 1) {
       text("X", squarePos1 + 10, squarePos1 + 40);
      } else if (withBot == false) {
       text("O", squarePos1 + 5, squarePos1 + 40);
      }
    } if (square2Color == "black" && mouseX >= squarePos1 - 35 && mouseX <= squarePos1 + 85 && mouseY >= squarePos1 + 165 && mouseY <= squarePos1 + 255 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
      if (playerTurn == 1) {
       text("X", squarePos1 + 10, squarePos1 + 240);
      } else if (withBot == false) {
       text("O", squarePos1 + 5, squarePos1 + 240);
      }
    } if (square3Color == "black" && mouseX >= squarePos1 - 35 && mouseX <= squarePos1 + 85 && mouseY >= squarePos1 + 365 && mouseY <= squarePos1 + 455 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
      if (playerTurn == 1) {
       text("X", squarePos1 + 10, squarePos1 + 440);
      } else if (withBot == false) {
       text("O", squarePos1 + 5, squarePos1 + 440);
      }
    } if (square4Color == "black" && mouseX >= squarePos1 + 125 && mouseX <= squarePos1 + 245 && mouseY >= squarePos1 - 35 && mouseY <= squarePos1 + 55 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
      if (playerTurn == 1) {
        text("X", squarePos1 + 170, squarePos1 + 40);
      } else if (withBot == false) {
        text("O", squarePos1 + 165, squarePos1 + 40);
      }
    }  if (square5Color == "black" && mouseX >= squarePos1 + 125 && mouseX <= squarePos1 + 245 && mouseY >= squarePos1 + 165 && mouseY <= squarePos1 + 255 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
       if (playerTurn == 1) {
        text("X", squarePos1 + 170, squarePos1 + 240);
      } else if (withBot == false) {
        text("O", squarePos1 + 165, squarePos1 + 240);
      }
    }  if (square6Color == "black" && mouseX >= squarePos1 + 125 && mouseX <= squarePos1 + 245 && mouseY >= squarePos1 + 365 && mouseY <= squarePos1 + 455 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
       if (playerTurn == 1) {
        text("X", squarePos1 + 170, squarePos1 + 440);
      } else if (withBot == false) {
        text("O", squarePos1 + 165, squarePos1 + 440);
      }
    } if (square7Color == "black" && mouseX >= squarePos1 + 285 && mouseX <= squarePos1 + 405 && mouseY >= squarePos1 - 35 && mouseY <= squarePos1 + 55 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
      if (playerTurn == 1) {
        text("X", squarePos1 + 330, squarePos1 + 40);
      } else if (withBot == false) {
        text("O", squarePos1 + 325, squarePos1 + 40);
      }
    }  if (square8Color == "black" && mouseX >= squarePos1 + 285 && mouseX <= squarePos1 + 405 && mouseY >= squarePos1 + 165 && mouseY <= squarePos1 + 255 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
      if (playerTurn == 1) {
       text("X", squarePos1 + 330, squarePos1 + 240);
      } else if (withBot == false) {
       text("O", squarePos1 + 325, squarePos1 + 240);
      }
    }  if (square9Color == "black" && mouseX >= squarePos1 + 285 && mouseX <= squarePos1 + 405 && mouseY >= squarePos1 + 365 && mouseY <= squarePos1 + 455 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false) {
       if (playerTurn == 1) {
         text("X", squarePos1 + 330, squarePos1 + 440);
      } else if (withBot == false) {
         text("O", squarePos1 + 325, squarePos1 + 440);
      }
    } 
  //win checker
  
  //diagonalen 
  
  if (square1Color == "red" && square5Color == "red" && square9Color == "red"){
    gameIsWonRed = true;
  } 
  if (square1Color == "blue" && square5Color == "blue" && square9Color == "blue"){
    gameIsWonBlue = true;
  }
  if (square3Color == "red" && square5Color == "red" && square7Color == "red"){
    gameIsWonRed = true;
  }

  if (square3Color == "blue" && square5Color == "blue" && square7Color == "blue" ){
    gameIsWonBlue = true;
  }

  // verticaal

  if (square1Color == "red" && square2Color == "red" && square3Color == "red"){
    gameIsWonRed = true;
  } 
  if (square1Color == "blue" && square2Color == "blue" && square3Color == "blue"){
    gameIsWonBlue = true;
  }
  if (square4Color == "red" && square5Color == "red" && square6Color == "red"){
    gameIsWonRed = true;
  } 
  if (square4Color == "blue" && square5Color == "blue" && square6Color == "blue" ){
    gameIsWonBlue = true;
  }
  if (square7Color == "red" && square8Color == "red" && square9Color == "red"){
    gameIsWonRed = true;
  } 
  if (square7Color == "blue" && square8Color == "blue" && square9Color == "blue" ){
    gameIsWonBlue = true;
  }

  //horizontaal

 if (square1Color == "red" && square4Color == "red" && square7Color == "red"){
   gameIsWonRed = true;
  } 
  if (square1Color == "blue" && square4Color == "blue" && square7Color == "blue"){
    gameIsWonBlue = true;
  }
  if (square2Color == "red" && square5Color == "red" && square8Color == "red"){
    gameIsWonRed = true;
  } 
  if (square2Color == "blue" && square5Color == "blue" && square8Color == "blue" ){
    gameIsWonBlue = true;
  }
  if (square3Color == "red" && square6Color == "red" && square9Color == "red"){
    gameIsWonRed = true;
  } 
  if (square3Color == "blue" && square6Color == "blue" && square9Color == "blue" ){
    gameIsWonBlue = true;
  }

  if (square1Color != "black" && square2Color != "black" && square3Color != "black" && square4Color != "black" && square5Color != "black" && square6Color != "black" && square7Color != "black" && square8Color != "black" && square9Color != "black" && gameIsWonBlue == false && gameIsWonRed == false) {
    isTie = true;
  }

} else {
  // de terminal
  background("black");
  fill("white");
  textSize(16);

  text("[kjeld@nixos:~]$ ",20,110);

  if (gameIsWonBlue == true && withBot == false) {
    text("[kjeld@nixos:~]$ tictactty",20,20);
    text ("blue won!",20,80); 
    text(winMessage, 20, 50);
  } else if (gameIsWonRed == true && withBot == false) {
    text("[kjeld@nixos:~]$ tictactty",20,20);
    text("red won!",20,80);
    text(winMessage, 20,50);
  } else if (isTie == true && withBot == false) {
    text("[kjeld@nixos:~]$ tictactty",20,20);
    text("You tied!",20,80);
    text(tieMessage,20,50);
  } else if (gameIsStarted == false) {
    text("[kjeld@nixos:~]$ tictactty --help",20,20);
    text("Welcome to Tic-tac-TTY, press return to play or space to play with a bot",20,50);
    text("Usage: tictactty [options]",20,80);
  } else if (gameIsWonRed == true && withBot == true) {
    text("[kjeld@nixos:~]$ tictactty --bot",20,20);
    text(statusMessagePositive,20,50);
    text("Superb", 20,80);
  } else if (gameIsWonBlue == true && withBot == true){
    text("[kjeld@nixos:~]$ tictactty --bot",20,20);
    text(statusMessageNegative,20,50);
    text("Try again", 20,80);
  } else {
    text("[kjeld@nixos:~]$ tictactty --bot",20,20);
    text(statusMessageOK,20,50);
    text(okStatus, 20,80);
  }
 } 
}

// checken of de muis op de juiste positie is en mouis functionaliteit
function mouseReleased() {
  if (mouseButton === "left") {
    if (square1Color == "black" && mouseX >= squarePos1 - 35 && mouseX <= squarePos1 + 85 && mouseY >= squarePos1 - 35 && mouseY <= squarePos1 + 55 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square1Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square1Color = "blue";
        playerTurn = 1;
      }
    }  if (square2Color == "black" && mouseX >= squarePos1 - 35 && mouseX <= squarePos1 + 85 && mouseY >= squarePos1 + 165 && mouseY <= squarePos1 + 255 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square2Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square2Color = "blue";
        playerTurn = 1;
      }
    } if (square3Color == "black" && mouseX >= squarePos1 - 35 && mouseX <= squarePos1 + 85 && mouseY >= squarePos1 + 365 && mouseY <= squarePos1 + 455 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square3Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square3Color = "blue";
        playerTurn = 1;
      }
    } if (square4Color == "black" && mouseX >= squarePos1 + 125 && mouseX <= squarePos1 + 245 && mouseY >= squarePos1 - 35 && mouseY <= squarePos1 + 55 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square4Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square4Color = "blue";
        playerTurn = 1;
      }
    }  if (square5Color == "black" && mouseX >= squarePos1 + 125 && mouseX <= squarePos1 + 245 && mouseY >= squarePos1 + 165 && mouseY <= squarePos1 + 255 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square5Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square5Color = "blue";
        playerTurn = 1;
      }
    }  if (square6Color == "black" && mouseX >= squarePos1 + 125 && mouseX <= squarePos1 + 245 && mouseY >= squarePos1 + 365 && mouseY <= squarePos1 + 455 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square6Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square6Color = "blue";
        playerTurn = 1;
      }
    } if (square7Color == "black" && mouseX >= squarePos1 + 285 && mouseX <= squarePos1 + 405 && mouseY >= squarePos1 - 35 && mouseY <= squarePos1 + 55 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square7Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square7Color = "blue";
        playerTurn = 1;
      }
    }  if (square8Color == "black" && mouseX >= squarePos1 + 285 && mouseX <= squarePos1 + 405 && mouseY >= squarePos1 + 165 && mouseY <= squarePos1 + 255 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square8Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square8Color = "blue";
        playerTurn = 1;
      }
    }  if (square9Color == "black" && mouseX >= squarePos1 + 285 && mouseX <= squarePos1 + 405 && mouseY >= squarePos1 + 365 && mouseY <= squarePos1 + 455 && gameIsStarted == true && gameIsWonBlue == false && gameIsWonRed == false && isTie == false) {
      if (playerTurn == 1) {
        square9Color = "red";
        botVar = random(5);
        botVar = round(botVar);
        botTalk = 1;
        playerTurn += 1;
      } else if (withBot == false) {
        square9Color = "blue";
        playerTurn = 1;
      }
    } 
  }
}
