document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".board");

    // Unicode characters for chess pieces
    const pieces = {
        rook: "♜", knight: "♞", bishop: "♝",
        queen: "♛", king: "♚", pawn: "♟"
    };

    // Chessboard Setup
    const initialSetup = [
        ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
        ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
        ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    ];

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
            if (initialSetup[row][col]) {
                cell.textContent = initialSetup[row][col];
            }

            // Click event for selecting/moving pieces
            cell.addEventListener("click", () => handleClick(cell));

            board.appendChild(cell);
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".board");
    let selectedPiece = null;
    let selectedPosition = null;

    board.addEventListener("click", function (event) {
        const cell = event.target;

        // Check if the clicked cell is valid
        if (cell.classList.contains("cell")) {
            const piece = cell.innerText.trim(); // Get piece text
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);

            if (selectedPiece) {
                // Check if clicking on a valid move
                if (cell.classList.contains("highlight")) {
                    movePiece(selectedPiece, selectedPosition, { row, col });
                    clearSelection();
                } else {
                    clearSelection();
                    selectPiece(cell, piece, row, col);
                }
            } else if (piece) {
                selectPiece(cell, piece, row, col);
            }
        }
    });

    function selectPiece(cell, piece, row, col) {
        if (!piece) return;

        selectedPiece = piece;
        selectedPosition = { row, col };

        clearSelection(); 
        cell.classList.add("selected"); // Highlight the piece
        highlightValidMoves(piece, row, col);
    }

    function movePiece(piece, from, to) {
        const fromCell = document.querySelector(`[data-row="${from.row}"][data-col="${from.col}"]`);
        const toCell = document.querySelector(`[data-row="${to.row}"][data-col="${to.col}"]`);
        
        toCell.innerText = piece; // Move piece
        fromCell.innerText = ""; // Clear old position
        clearSelection();
    }

    function highlightValidMoves(piece, row, col) {
        clearHighlights();

        let possibleMoves = [];

        if (piece === "♙") {
            possibleMoves = [{ row: row - 1, col }];
        } 

        possibleMoves.forEach(move => {
            const moveCell = document.querySelector(`[data-row="${move.row}"][data-col="${move.col}"]`);
            if (moveCell) moveCell.classList.add("highlight");
        });
    }

    function clearSelection() {
        document.querySelectorAll(".selected").forEach(cell => cell.classList.remove("selected"));
        clearHighlights();
        selectedPiece = null;
        selectedPosition = null;
    }

    function clearHighlights() {
        document.querySelectorAll(".highlight").forEach(cell => cell.classList.remove("highlight"));
    }
});