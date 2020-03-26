import {useEffect, useState} from "react";

const usePlayers = () => {
    const [players, setPlayers] = useState({
        player1: null,
        player2: null,
    });
    useEffect(() => {
        console.log('new value in hook : ', players);
    }, [players]);
    return [players, setPlayers];
};
export default usePlayers;