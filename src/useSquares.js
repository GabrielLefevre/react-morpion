import {useEffect, useState} from "react";

const useSquares = () => {
    const [squares, setQuares] = useState({
            squares: Array(9)
        }
    );

    useEffect(() => {
    }, [squares]);

    return [squares, setQuares];
};

export default useSquares();