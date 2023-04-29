function rollDice(){
    let randomNumber1 = Math.floor((Math.random() * 6) + 1) ;
    let randomNumber2 = Math.floor((Math.random() * 6) + 1) ;
    let diceRandom1 = `images/dice${randomNumber1}.png`
    let diceRandom2 = `images/dice${randomNumber2}.png`

    document.querySelector(".img1").setAttribute("src", diceRandom1);
    document.querySelector(".img2").setAttribute("src", diceRandom2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
    }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Tie. Refresh Again !"
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
    }

}

document.querySelector(".btn").addEventListener("click", function(){
    rollDice();
})

