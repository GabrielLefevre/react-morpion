import React, { useState } from 'react';
import Board from "./Board";
import useSquares from "./useSquares";
import useGame from "./useGame";


function GameHook() { // test WIP
    const [game, setGame] = useGame();
    const [squares, setSquares] = useSquares();

    // const handleClick = (i) => {
    //
    // }


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={squares}
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
        </div>
    );


}


class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9),
            xIsNext: true,
            stepNumber: 0
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = winner + ' a gagné';
        } else {
            status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
            </div>
        );
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;
