import { useState } from "react";
import "./assets/board.css";

function Square({ value, handleclick }) {
    return (
        <div className="square" onClick={handleclick}>
            {value}
        </div>
    );
}

function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(index) {
        const nextBoard = [...board];

        if (board[index] || calculateWinner(board)) {
            return;
        }

        if (xIsNext) {
            nextBoard[index] = "X";
        } else {
            nextBoard[index] = "O";
        }

        setBoard(nextBoard);
        setXIsNext(!xIsNext);
        calculateWinner(board);
    }

    return (
        <>
            {xIsNext ? <div>Tour de "X"</div> : <div>Tour de "O"</div>}
            <div className="roww">
                <Square value={board[0]} handleclick={() => handleClick(0)} />
                <Square value={board[1]} handleclick={() => handleClick(1)} />
                <Square value={board[2]} handleclick={() => handleClick(2)} />
            </div>
            <div className="roww">
                <Square value={board[3]} handleclick={() => handleClick(3)} />
                <Square value={board[4]} handleclick={() => handleClick(4)} />
                <Square value={board[5]} handleclick={() => handleClick(5)} />
            </div>
            <div className="roww">
                <Square value={board[6]} handleclick={() => handleClick(6)} />
                <Square value={board[7]} handleclick={() => handleClick(7)} />
                <Square value={board[8]} handleclick={() => handleClick(8)} />
            </div>
        </>
    );
}

export default Board;

function calculateWinner(tableboard) {
    const lineswinner = [
        [0, 1, 2],
        [0, 3, 6],
        [6, 7, 8],
        [2, 5, 8],
        [1, 4, 7],
        [3, 4, 5],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lineswinner.length; i++) {
        const [a, b, c] = lineswinner[i];

        if (
            tableboard[a] &&
            tableboard[a] === tableboard[b] &&
            tableboard[a] === tableboard[c]
        ) {
            return tableboard[a];
        }
        return null;
    }
}
