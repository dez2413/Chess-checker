
    const board = document.querySelector("#board");
    const playerdisplay = document.querySelector("#player");
    const infodocument= document.querySelector("#info-display");

    // Chessboard Setup
    const startPieces= [
        ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
        ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
        ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    ];

function CreatedBoard() {

    // Create board dynamically
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;

                // Checkerboard pattern
                cell.style.backgroundColor = (row + col) % 2 === 0 ? "#c0bbb7" : "#413f3f";
                
                // Set piece
                if (startPieces[row][col]) {
                    cell.textContent = startPieces[row][col];
                }

                board.appendChild(cell);
            }
        }
}

CreatedBoard()
