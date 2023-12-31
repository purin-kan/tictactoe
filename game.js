let currentTurn = 'X';

const reset = () => {
    currentTurn = 'X';

    let numberOfGrid = document.querySelectorAll(".grid-cell");
    for (let i = 0; i < numberOfGrid.length; i++) {
        numberOfGrid[i].textContent = "";
    }

    document.getElementById('player-turn').textContent = "Player 1 Start!";

    document.body.style.backgroundColor = "white";

    enableGrid();
}

const getBoard = () => {
    const c1 = document.getElementById('cell1').textContent;
    const c2 = document.getElementById('cell2').textContent;
    const c3 = document.getElementById('cell3').textContent;
    const c4 = document.getElementById('cell4').textContent;
    const c5 = document.getElementById('cell5').textContent;
    const c6 = document.getElementById('cell6').textContent;
    const c7 = document.getElementById('cell7').textContent;
    const c8 = document.getElementById('cell8').textContent;
    const c9 = document.getElementById('cell9').textContent;

    return {
        c1, c2, c3, c4, c5, c6, c7, c8, c9
    };
}


const checkWin = () => {
    let win = false;
    const c = getBoard();

    if (c.c1 === c.c2 && c.c2 === c.c3 && c.c1 !== "") {
        win = true;
    } else if (c.c4 === c.c5 && c.c5 === c.c6 && c.c4 !== "") {
        win = true;
    } else if (c.c7 === c.c8 && c.c8 === c.c9 && c.c7 !== "") {
        win = true;
    } else if (c.c1 === c.c4 && c.c4 === c.c7 && c.c1 !== "") {
        win = true;
    } else if (c.c2 === c.c5 && c.c5 === c.c8 && c.c2 !== "") {
        win = true;
    } else if (c.c3 === c.c6 && c.c6 === c.c9 && c.c3 !== "") {
        win = true;
    } else if (c.c1 === c.c5 && c.c5 === c.c9 && c.c1 !== "") {
        win = true;
    } else if (c.c3 === c.c5 && c.c5 === c.c7 && c.c3 !== "") {
        win = true;
    }

    if (win) {
        document.body.style.backgroundColor = "white";
        document.getElementById('player-turn').textContent = currentTurn + " Wins!";
        disableGrid();
    }
    return win;
}

const gridContainer = document.getElementById('grid-container');
const enableGrid = () => {
    gridContainer.classList.remove('disabled');
}
const disableGrid = () => {
    gridContainer.classList.add('disabled');
}


const play = (cellNo) => {
    if (!checkWin()) {
        if (currentTurn === 'X') {
            document.body.style.backgroundColor = "#4490BB";
            document.getElementById('cell' + cellNo).textContent = currentTurn;

            currentTurn = 'O';
        } else {
            document.body.style.backgroundColor = "#BB6F44";
            document.getElementById('cell' + cellNo).textContent = currentTurn;

            currentTurn = 'X';
        }
        updateContent();
    }
    if (checkWin()) {
        checkWin();
    }
}

const updateContent = () => {
    document.getElementById('player-turn').textContent = currentTurn + "'s turn";
}
