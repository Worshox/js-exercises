const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceButtons =document.querySelectorAll("button");
let player;
let computer;
let result;

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    });
});

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "🪨";
            break;
        case 2:
            computer = "🧻";
            break;
        case 3:
            computer = "✂️";
            break;
    }
}

function checkWinner() {
    if (player === computer) return "Draw";
    if (computer === "🪨") return (player === "🧻") ? "You win!" : "You lose!";
    if (computer === "🧻") return (player === "✂️") ? "You win!" : "You lose!";
    if (computer === "✂️") return (player === "🪨") ? "You win!" : "You lose!";

}