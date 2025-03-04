
const gameBoard = document.querySelector("#board")
const Player = document.querySelector("#player")
const info = document.querySelector("#info")

// Chessboard Setup
const startPieces = [
    Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook,
    Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
    Rook, Knight, Bishop, King, Queen, Bishop, Knight, Rook,
]

function createBoard(){
    gameBoard.innerHTML = ""; 
    
    startPieces.forEach((startPiece, i) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = startPiece ;

        cell.firstChild && cell.setAttribute('draggable', true);
        cell.setAttribute("cell-id", i);

       
        const row = Math.floor(i / 8);
        const col = i % 8;
        cell.classList.add((row + col) % 2 === 0 ? "white" : "black");

        if (i <= 15) {
            cell.firstChild.firstChild.classList.add("blackPiece");
        }
        if (i >= 48) {
            cell.firstChild.firstChild.classList.add("whitePiece");
        }
        gameBoard.appendChild(cell);
    });
}

createBoard();


const allCell = document.querySelectorAll("#board .cell");
// console.log(allCell)

allCell.forEach(cell => {
    cell.addEventListener('dragstart', dragstart);
//     cell.addEventListener('dragover', dragover);
//     cell.addEventListener('drop', dragdrop);
})


// let startPositionId
// let draggedElement

function dragstart(e) {
//     startPositionId = e.target.parentNode.getAttribute("cell-id")
//     draggedElement = e.target
    console.log(e.target.parentNode.getAttribute("cell-id"));
}

// function dragover(e) {
//     e.preventDefault();
// }

// function dragdrop(e) {
//     e.stopPropagation();

//     // console.log('player go', playerTurn)
//     // console.log('target', e.target)
//     // console.log(draggedElement)

//     const correctTurn = draggedElement.firstChild.classList.contains(playerTurn);
//     const taken = e.target.classList.contains('piece');
//     const valid = checkIfValid(e.target);
//     const opponentTurn = playerTurn === 'white' ? 'black' : 'white';
//     const takenByOpponent = e.target.firstChild?.classList.contains(opponentTurn);
//     // console.log('opp go', opponentTurn)


//     if (correctTurn) {
//         // must check this condition
//         if (takenByOpponent && valid) {
//             e.target.parentNode.append(draggedElement);
//             e.target.remove();
//             checkForWin();
//             changePlayer();
//             return
//         }
//         if (taken && !takenByOpponent) {
//             err.textContent = 'Can not go there'
//             setTimeout(() => {
//                 err.textContent = ''
//             }, 2000);
//             return
//         }
//         if (valid) {
//             e.target.append(draggedElement);
//             checkForWin();
//             changePlayer();
//             return
//         }
//     }
// }

// function checkIfValid(target) {
//     const targetId = Number(target.getAttribute('cell-id')) || Number(target.parentNode.getAttribute('cell-id'));
//     const startId = Number(startPositionId);
//     const piece = draggedElement.id
//     console.log(startId, targetId, piece)

//     switch (piece) {
//         case 'pawn':
//             const starterRow = [8, 9, 10, 11, 12, 13, 14, 15];
//             if (starterRow.includes(startId) && startId + width * 2 === targetId ||
//                 startId + width === targetId ||
//                 startId + width - 1 === targetId && document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild ||
//                 startId + width + 1 === targetId && document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild) {
//                 return true;
//             }
//             break;
//         case 'knight':
//             if (
//                 startId + width * 2 + 1 === targetId ||
//                 startId + width * 2 - 1 === targetId ||
//                 startId + width - 2 === targetId ||
//                 startId + width + 2 === targetId ||
//                 startId - width * 2 + 1 === targetId ||
//                 startId - width * 2 - 1 === targetId ||
//                 startId - width + 2 === targetId ||
//                 startId - width - 2 === targetId
//             ) {
//                 return true
//             }
//             break;

//         case 'bishop':
//             if (
//                 // for right cross --- forward
//                 startId + width + 1 === targetId ||
//                 startId + width * 2 + 2 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild ||
//                 startId + width * 3 + 3 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild ||
//                 startId + width * 4 + 4 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild ||
//                 startId + width * 5 + 5 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 + 4}"]`).firstChild ||
//                 startId + width * 6 + 6 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 + 5}"]`).firstChild ||
//                 startId + width * 7 + 7 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 + 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 + 6}"]`).firstChild ||

//                 // for left cross --- forward
//                 startId + width - 1 === targetId ||
//                 startId + width * 2 - 2 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild ||
//                 startId + width * 3 - 3 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild ||
//                 startId + width * 4 - 4 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild ||
//                 startId + width * 5 - 5 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 - 4}"]`).firstChild ||
//                 startId + width * 6 - 6 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 - 5}"]`).firstChild ||
//                 startId + width * 7 - 7 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 - 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 - 6}"]`).firstChild ||

//                 // for right cross --- backward
//                 startId - width - 1 === targetId ||
//                 startId - width * 2 - 2 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild ||
//                 startId - width * 3 - 3 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild ||
//                 startId - width * 4 - 4 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild ||
//                 startId - width * 5 - 5 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 - 4}"]`).firstChild ||
//                 startId - width * 6 - 6 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 - 5}"]`).firstChild ||
//                 startId - width * 7 - 7 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 - 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 - 6}"]`).firstChild ||

//                 // fot left cross -- backward
//                 startId - width + 1 === targetId ||
//                 startId - width * 2 + 2 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild ||
//                 startId - width * 3 + 3 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild ||
//                 startId - width * 4 + 4 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild ||
//                 startId - width * 5 + 5 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 + 4}"]`).firstChild ||
//                 startId - width * 6 + 6 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 + 5}"]`).firstChild ||
//                 startId - width * 7 + 7 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 + 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 + 6}"]`).firstChild
//             ) {
//                 return true;
//             }
//             break;

//         case 'rook':
//             if (
//                 // moving straight forward
//                 startId + width === targetId ||
//                 startId + width * 2 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild ||
//                 startId + width * 3 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild ||
//                 startId + width * 4 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild ||
//                 startId + width * 5 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 4}"]`).firstChild ||
//                 startId + width * 6 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 5}"]`).firstChild ||
//                 startId + width * 7 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 6}"]`).firstChild ||

//                 // moving straight backward
//                 startId - width === targetId ||
//                 startId - width * 2 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild ||
//                 startId - width * 3 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild ||
//                 startId - width * 4 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild ||
//                 startId - width * 5 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 4}"]`).firstChild ||
//                 startId - width * 6 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 5}"]`).firstChild ||
//                 startId - width * 7 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 6}"]`).firstChild ||

//                 // moving left side straight
//                 startId + 1 === targetId ||
//                 startId + 2 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild ||
//                 startId + 3 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild ||
//                 startId + 4 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild ||
//                 startId + 5 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 4}"]`).firstChild ||
//                 startId + 6 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 5}"]`).firstChild ||
//                 startId + 7 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 6}"]`).firstChild ||

//                 // moving right side straight
//                 startId - 1 === targetId ||
//                 startId - 2 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild ||
//                 startId - 3 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild ||
//                 startId - 4 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild ||
//                 startId - 5 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 4}"]`).firstChild ||
//                 startId - 6 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 5}"]`).firstChild ||
//                 startId - 7 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 6}"]`).firstChild
//             ) {
//                 return true
//             }
//             break;

//         case 'queen':
//             if (
//                 // for right cross --- forward
//                 startId + width + 1 === targetId ||
//                 startId + width * 2 + 2 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild ||
//                 startId + width * 3 + 3 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild ||
//                 startId + width * 4 + 4 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild ||
//                 startId + width * 5 + 5 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 + 4}"]`).firstChild ||
//                 startId + width * 6 + 6 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 + 5}"]`).firstChild ||
//                 startId + width * 7 + 7 === targetId && !document.querySelector(`[cell-id = "${startId + width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 + 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 + 6}"]`).firstChild ||

//                 // for left cross --- forward
//                 startId + width - 1 === targetId ||
//                 startId + width * 2 - 2 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild ||
//                 startId + width * 3 - 3 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild ||
//                 startId + width * 4 - 4 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild ||
//                 startId + width * 5 - 5 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 - 4}"]`).firstChild ||
//                 startId + width * 6 - 6 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 - 5}"]`).firstChild ||
//                 startId + width * 7 - 7 === targetId && !document.querySelector(`[cell-id = "${startId + width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 5 - 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 - 6}"]`).firstChild ||

//                 // for right cross --- backward
//                 startId - width - 1 === targetId ||
//                 startId - width * 2 - 2 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild ||
//                 startId - width * 3 - 3 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild ||
//                 startId - width * 4 - 4 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild ||
//                 startId - width * 5 - 5 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 - 4}"]`).firstChild ||
//                 startId - width * 6 - 6 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 - 5}"]`).firstChild ||
//                 startId - width * 7 - 7 === targetId && !document.querySelector(`[cell-id = "${startId - width - 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 - 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 - 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 - 6}"]`).firstChild ||

//                 // fot left cross -- backward
//                 startId - width + 1 === targetId ||
//                 startId - width * 2 + 2 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild ||
//                 startId - width * 3 + 3 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild ||
//                 startId - width * 4 + 4 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild ||
//                 startId - width * 5 + 5 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 + 4}"]`).firstChild ||
//                 startId - width * 6 + 6 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 + 5}"]`).firstChild ||
//                 startId - width * 7 + 7 === targetId && !document.querySelector(`[cell-id = "${startId - width + 1}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 2 + 2}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[cell-id = "${startId - width * 5 + 5}"]`).firstChild && !document.querySelector(`[cell-id = "${startId + width * 6 + 6}"]`).firstChild ||

//                 // moving straight forward
//                 startId + width === targetId ||
//                 startId + width * 2 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild ||
//                 startId + width * 3 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild ||
//                 startId + width * 4 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild ||
//                 startId + width * 5 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 4}"]`).firstChild ||
//                 startId + width * 6 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 5}"]`).firstChild ||
//                 startId + width * 7 === targetId && !document.querySelector(`[cell-id="${startId + width}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId + width * 6}"]`).firstChild ||

//                 // moving straight backward
//                 startId - width === targetId ||
//                 startId - width * 2 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild ||
//                 startId - width * 3 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild ||
//                 startId - width * 4 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild ||
//                 startId - width * 5 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 4}"]`).firstChild ||
//                 startId - width * 6 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 5}"]`).firstChild ||
//                 startId - width * 7 === targetId && !document.querySelector(`[cell-id="${startId - width}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId - width * 6}"]`).firstChild ||

//                 // moving left side straight
//                 startId + 1 === targetId ||
//                 startId + 2 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild ||
//                 startId + 3 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild ||
//                 startId + 4 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild ||
//                 startId + 5 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 4}"]`).firstChild ||
//                 startId + 6 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 5}"]`).firstChild ||
//                 startId + 7 === targetId && !document.querySelector(`[cell-id="${startId + 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId + 6}"]`).firstChild ||

//                 // moving right side straight
//                 startId - 1 === targetId ||
//                 startId - 2 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild ||
//                 startId - 3 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild ||
//                 startId - 4 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild ||
//                 startId - 5 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 4}"]`).firstChild ||
//                 startId - 6 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 5}"]`).firstChild ||
//                 startId - 7 === targetId && !document.querySelector(`[cell-id="${startId - 1}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 2}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 3}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 4}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 5}"]`).firstChild && !document.querySelector(`[cell-id="${startId - 6}"]`).firstChild
//             ) {
//                 return true
//             }
//             break;

//         case 'king':
//             if (
//                 startId + 1 === targetId ||
//                 startId - 1 === targetId ||
//                 startId + width === targetId ||
//                 startId + width + 1 === targetId ||
//                 startId + width - 1 === targetId ||
//                 startId - width === targetId ||
//                 startId - width + 1 === targetId ||
//                 startId - width - 1 === targetId
//             ) {
//                 return true
//             }
//             break;
//         default:
//             break;
//     }
// }


// function changePlayer() {
//     if (playerTurn === 'black') {
//         reverseIds()
//         playerTurn = 'white';
//         playerDetails.textContent = 'white'
//     } else {
//         revertIds();
//         playerTurn = 'black'
//         playerDetails.textContent = 'black'
//     }
// }

// function reverseIds() {
//     const allcells = document.querySelectorAll('#gameboard .cell');
//     allcells.forEach((cell, i) => {
//         cell.setAttribute('cell-id', (width * width - 1) - i)
//     })
// }

// function revertIds() {
//     const allcells = document.querySelectorAll('#gameboard .cell');
//     allcells.forEach((cell, i) => {
//         cell.setAttribute('cell-id', i)
//     })
// }

// function checkForWin() {
//     const kings = Array.from(document.querySelectorAll('#king'));

//     if (!kings.some(king => king.firstChild.classList.contains('white'))) {
//         infoDisplay.innerHTML = "Black Player Wins!";
//         const allcells = document.querySelectorAll('.cell');
//         allcells.forEach(cell => cell.firstChild?.setAttribute('draggable', false));
//     }
//     if (!kings.some(king => king.firstChild.classList.contains('black'))) {
//         infoDisplay.innerHTML = "White Player Wins!";
//         const allcells = document.querySelectorAll('.cell');
//         allcells.forEach(cell => cell.firstChild?.setAttribute('draggable', false));
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const board = document.querySelector("#board");
//     let selectedPiece = null;
//     let selectedPosition = null;

//     board.addEventListener("click", function (event) {
//         const cell = event.target;

//         // Check if the clicked cell is valid
//         if (cell.classList.contains("cell")) {
//             const piece = cell.innerText.trim(); // Get piece text
//             const row = parseInt(cell.dataset.row);
//             const col = parseInt(cell.dataset.col);

//             if (selectedPiece) {
//                 // Check if clicking on a valid move
//                 if (cell.classList.contains("highlight")) {
//                     movePiece(selectedPiece, selectedPosition, { row, col });
//                     clearSelection();
//                 } else {
//                     clearSelection();
//                     selectPiece(cell, piece, row, col);
//                 }
//             } else if (piece) {
//                 selectPiece(cell, piece, row, col);
//             }
//         }
//     });

//     function selectPiece(cell, piece, row, col) {
//         if (!piece) return;

//         selectedPiece = piece;
//         selectedPosition = { row, col };

//         clearSelection(); 
//         cell.classList.add("selected"); // Highlight the piece
//         highlightValidMoves(piece, row, col);
//     }

//     function movePiece(piece, from, to) {
//         const fromCell = document.querySelector(`[data-row="${from.row}"][data-col="${from.col}"]`);
//         const toCell = document.querySelector(`[data-row="${to.row}"][data-col="${to.col}"]`);
        
//         toCell.innerText = piece; // Move piece
//         fromCell.innerText = ""; // Clear old position
//         clearSelection();
//     }

//     function highlightValidMoves(piece, row, col) {
//         clearHighlights();

//         let possibleMoves = [];

//         if (piece === "♙") {
//             possibleMoves = [{ row: row - 1, col }];
//         } 

//         possibleMoves.forEach(move => {
//             const moveCell = document.querySelector(`[data-row="${move.row}"][data-col="${move.col}"]`);
//             if (moveCell) moveCell.classList.add("highlight");
//         });
//     }

//     function clearSelection() {
//         document.querySelectorAll(".selected").forEach(cell => cell.classList.remove("selected"));
//         clearHighlights();
//         selectedPiece = null;
//         selectedPosition = null;
//     }

//     function clearHighlights() {
//         document.querySelectorAll(".highlight").forEach(cell => cell.classList.remove("highlight"));
//     }
// });