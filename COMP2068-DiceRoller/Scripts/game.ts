/*
*Source FileName: COMP2068-CreateJSBoilerPlate-master
*Author Name: Robert S Berry
*Date: February 19
*This program rolls 2 random numbers bound to 1 - 6. Then displays the results in text and bitmap form.
*/


//Global Vars
var canvas;
var stage: createjs.Stage;

//Dice Roller Assets and Stage Containers
var game: createjs.Container;
var firstDie: createjs.Bitmap;
var secondDie: createjs.Bitmap;

//GUI Controls
var buttonLabel: createjs.Text;
var firstDieResult: createjs.Text;
var secondDieResult: createjs.Text;
var rollButton: createjs.Bitmap;

//Data Vars
var firstRoll: String;
var secondRoll: String;


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

// Set up assets and create the die pictures as if it was already rolled and awaiting new roll. Add event handlers.
function main() {
    // Bitmap Button for rolling our dice
    rollButton = new createjs.Bitmap("assets/images/blueButton.png");
    stage.addChild(rollButton);
    rollButton.x = stage.canvas.width * 0.5;
    rollButton.y = stage.canvas.height * 0.2;
    rollButton.regX = 110;
    rollButton.regY = 110;
    
    rollButton.addEventListener("click", buttonClicked);
    rollButton.addEventListener("mouseover", buttonOver);
    rollButton.addEventListener("mouseout", buttonOut);

    //Bitmaps for die objects.
    firstDie = new createjs.Bitmap("assets/images/1die.png");
    secondDie = new createjs.Bitmap("assets/images/1die.png");

    firstDie.x = 0;
    firstDie.y = stage.canvas.height * 0.6;

    secondDie.x = stage.canvas.width * 0.7;
    secondDie.y = stage.canvas.height * 0.6;

    stage.addChild(firstDie);
    stage.addChild(secondDie);

    // Roll Dice Label
    buttonLabel = new createjs.Text("Roll Dice", "40px Consolas", "#000000");
    stage.addChild(buttonLabel);
    buttonLabel.x = stage.canvas.width * 0.5;
    buttonLabel.y = stage.canvas.height * 0.2;
    buttonLabel.regX = buttonLabel.getBounds().width * 0.5;
    buttonLabel.regY = buttonLabel.getBounds().height * 0.5;
}

function gameLoop() {
    stage.update(); // Refreshes our stage
}

// Event handlers This is the core of our program, doing the math and new assets loading on command. Preferably I would have
// done an array of images and just yanked the one I needed as well as adding all assets to a container for easy cleaning and sizing
// but as always in Tom's midterms time is a cruel Mistress and one I shant upset by dallying with wants and should haves. :c
function buttonClicked() {

    //Remove elements so as not to clog memory and make a mess.
    if (firstDie) {
        stage.removeChild(firstDie);
    }
    if (secondDie) {
        stage.removeChild(secondDie);
    }
    if (firstDieResult) {
        stage.removeChild(firstDieResult);
    }
    if (secondDieResult) {
        stage.removeChild(secondDieResult);
    }

    //Programatically roll our dice.
    var firstDiceRoll = Math.floor((Math.random() * 6) + 1)
    var secondDiceRoll = Math.floor((Math.random() * 6) + 1)
    
    //Strings are nice things.
    firstRoll = firstDiceRoll.toString();
    secondRoll = secondDiceRoll.toString();

    //Assign image to roll.
    firstDie = new createjs.Bitmap("assets/images/" + firstRoll + "die.png");
    secondDie = new createjs.Bitmap("assets/images/" + secondRoll + "die.png");

    //POSITIONING THE DICES (Die)
    firstDie.x = 0;
    firstDie.y = stage.canvas.height * 0.6;

    secondDie.x = stage.canvas.width * 0.7;
    secondDie.y = stage.canvas.height * 0.6;

    //Text Results For rolled Dice
    firstDieResult = new createjs.Text(firstDiceRoll.toString(), "40px Consolas", "#000000");
    stage.addChild(firstDieResult);
    firstDieResult.x = 200;
    firstDieResult.y = stage.canvas.height * 0.6 - 20;
    firstDieResult.regX = buttonLabel.getBounds().width * 0.5;
    firstDieResult.regY = buttonLabel.getBounds().height * 0.5;
    //Text Results For rolled Dice
    secondDieResult = new createjs.Text(secondDiceRoll.toString(), "40px Consolas", "#000000");
    stage.addChild(secondDieResult);
    secondDieResult.x = stage.canvas.width * 0.7 + 200;
    secondDieResult.y = stage.canvas.height * 0.6 - 20;
    secondDieResult.regX = buttonLabel.getBounds().width * 0.5;
    secondDieResult.regY = buttonLabel.getBounds().height * 0.5;

    //Add them to stage.
    stage.addChild(firstDie);
    stage.addChild(secondDie);
    stage.addChild(firstDieResult);
    stage.addChild(secondDieResult);
    
}

function buttonOut() {
    rollButton.alpha = 1.0;
}

function buttonOver() {
    rollButton.alpha = 0.5;
}





