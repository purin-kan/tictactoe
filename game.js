let currentTurn = 'x';

const reset = () => {
    currentTurn = 'x';

    let numberOfGrid = document.querySelectorAll(".grid-cell");
    for (let i = 0; i < numberOfGrid.length; i++) {
        numberOfGrid[i].textContent = "";
    }

    document.getElementById('player-turn').textContent = "Player 1 Start!";

    document.body.style.backgroundColor = "white";
}


const play = (cell) => {
    if (currentTurn === 'x') {
        document.body.style.backgroundColor = "#4490BB";

        currentTurn = 'o';
    } else {
        document.body.style.backgroundColor = "#BB6F44";

        currentTurn = 'x';
    }
    updateContent();
}

const updateContent = () => {
    document.getElementById('player-turn').textContent = (currentTurn === 'x') ? "Player 1's Turn" : "Player 2's Turn";
}
