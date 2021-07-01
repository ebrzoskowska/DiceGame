let playerOneScore = 0;
let playerTwoScore = 0;

document.getElementById("diceOneButton").addEventListener("click", playerOneRoll);
document.getElementById("diceTwoButton").addEventListener("click", playerTwoRoll);

let images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
    "images/dice7.png"
];

let dice = document.querySelectorAll("img");

function playerOneRoll(){
    let rndNmbDice1 = Math.floor(Math.random()*7) + 1;
    let diceImage1 = "images/dice" + rndNmbDice1 + ".png";
    let diceOneRoll = document.getElementById("diceOneRoll");
    let diceOneScore = document.getElementById("diceOneScore");
    document.getElementById("diceOneImg").setAttribute("src",diceImage1);
    diceOneRoll.innerHTML = "roll: " + (rndNmbDice1);
    let OneScore = (playerOneScore += rndNmbDice1);
    diceOneScore.innerHTML = "score: " + OneScore;
    if( rndNmbDice1 == 7 ) {
        animation();
        (playerOneScore -= rndNmbDice1);
    }
    if(OneScore >= 20) {
        window.setTimeout(() => {
            document.getElementById("diceOneButton").setAttribute("style", "visibility: hidden;");
            document.getElementById("diceTwoButton").setAttribute("style", "visibility: hidden;");
            diceOneRoll.setAttribute("style", "visibility: hidden;");
            diceOneScore.setAttribute("style", "text-decoration: underline;");
            document.getElementById("winner").innerHTML = "Player 1 won !!!";
            refresh();
        }, 300);  
    }     
}

function playerTwoRoll(){
    let rndNmbDice2 = Math.floor(Math.random()*6) + 1;
    let diceImage2 = "images/dice" + rndNmbDice2 + ".png";
    let diceTwoRoll = document.getElementById("diceTwoRoll");
    let diceTwoScore = document.getElementById("diceTwoScore");
    document.getElementById("diceTwoImg").setAttribute("src",diceImage2);
    diceTwoRoll.innerHTML = "roll: " + (rndNmbDice2);
    let TwoScore = (playerTwoScore += rndNmbDice2);
    diceTwoScore.innerHTML = "score: " + TwoScore;
    if( rndNmbDice2 == 7 ) {
        animation();
        (playerTwoScore -= rndNmbDice2);
    }
    if(TwoScore >= 20) {
        window.setTimeout(() => {
            document.getElementById("diceTwoButton").setAttribute("style", "visibility: hidden;");
            document.getElementById("diceOneButton").setAttribute("style", "visibility: hidden;");
            diceTwoRoll.setAttribute("style", "visibility: hidden;");
            diceTwoScore.setAttribute("style", "text-decoration: underline;");
            document.getElementById("winner").innerHTML = "Player 2 won !!!";
            refresh();
        }, 300);
    }   
}

function refresh(){
    document.getElementById("refreshInfo").innerHTML = "Page will refresh itself after 5 sec.";
    window.setTimeout(() => {
        location.reload();
    }, 5000);   
}

function animation(){
    let animation = document.getElementById("pointsAnimation");
    animation.classList.add("addRemoveAnimation");
    window.setTimeout(() => {
        animation.className =  animation.className.replace( /(^|\s+)addRemoveAnimation($|\s+)/g , '' );
    }, 500); 
}

// This code was intended to be short, light, and easy, not repetitive, heavy, and awkward like my flirt...