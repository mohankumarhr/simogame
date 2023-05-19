
var colorSequence = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userSequence = [];
var level = 0;
var keypressed = true;


$(document).keypress(function () {
    if (keypressed) {
        nextSequence();
        
    }
    keypressed = false;
})


function nextSequence() {
    userSequence = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = colorSequence[randomNumber];
    gameSequence.push(randomChoosenColor);
    playSound(randomChoosenColor);
    animate(randomChoosenColor);

    
}


      $(".btn").on("click", function () {
            var userChoosenColor = this.id;
            userSequence.push(userChoosenColor);
            playSound(userChoosenColor);
            animate(userChoosenColor);
            answer(userSequence.length-1);
            
        })
    



function answer(currentLevel) {
    
    if (userSequence[currentLevel]===gameSequence[currentLevel]) {
        if (userSequence.length===gameSequence.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        } 
        
    }
    else{
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
         new Audio("sounds/wrong.mp3").play();
        startOver();
    }
    
}


function playSound(nameOfSound) {
    new Audio("sounds/" + nameOfSound + ".mp3").play();
}
function animate(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}
function startOver() {
    gameSequence = [];
    level = 0;
        keypressed = true;
        userSequence = [];
}


