let currentTurn = 'x';

const reset = () => {
    currentTurn = 'x';

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
    } else if (c.c1 === c.c4 && c.c4 === c.c7 && c.c1 !== "") {
        win = true;
    }
    // todo more win conditions

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
    if (checkWin()) {
        document.body.style.backgroundColor = "white";
        disableGrid();
    //     fixme requires addition click to turn white
    } else {
        if (currentTurn === 'x') {
            document.body.style.backgroundColor = "#4490BB";
            document.getElementById('cell' + cellNo).textContent = currentTurn;

            currentTurn = 'o';
        } else {
            document.body.style.backgroundColor = "#BB6F44";
            document.getElementById('cell' + cellNo).textContent = currentTurn;

            currentTurn = 'x';
        }
        updateContent();
    }
}

const updateContent = () => {
    document.getElementById('player-turn').textContent = (currentTurn === 'x') ? "Player 1's Turn (" + currentTurn + ")" : "Player 2's Turn (" + currentTurn + ")";
}
