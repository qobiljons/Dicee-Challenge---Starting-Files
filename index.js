function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


function getWinner(score1, score2) {
    let winner = "It is a Draw";
    if (score1 > score2) {
        winner = "Player 1 is the winner";
    } else if (score2 > score1) {
        winner = "Player 2 is the winner";
    }
    return winner;
}



let button = document.querySelector('.roll-button');
button.addEventListener('click', function() {
    
    let dice1 = getRandomNumber();
    let dice2 = getRandomNumber();
    
    
    let winner = getWinner(dice1, dice2);
    

    document.querySelector('.img1').setAttribute('src', `images/dice${dice1}.png`);
    document.querySelector('.img2').setAttribute('src', `images/dice${dice2}.png`);
    document.querySelector('.header').textContent = winner;
});
