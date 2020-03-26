import React from 'react';
import Square from "./Square";

const Board = ({squares, onClick}) => {
    return (
        <div>
            {[0, 1, 2].map((colNumber) => (
                <div key={'col' + colNumber} className="board-row">
                    {[0, 1, 2].map((i) => (
                        <Square
                            key={'square' + (colNumber * 3 + i)}
                            value={squares[colNumber * 3 + i]}
                            onClick={() => onClick(colNumber * 3 + i)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;