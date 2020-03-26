import React from "react";


// const Square = ({value, onClick}) => {
//     return (
//         <button className="square" onClick={onClick}>
//             {value}
//         </button>
//     );
// }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square