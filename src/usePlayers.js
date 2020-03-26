import {useEffect, useState} from "react";

const usePlayers = () => {
    const [players, setPlayers] = useState({
        player1: '',
        player2: '',
    });

    useEffect(() => {
        console.log('new value in hook : ', players);
    }, [players]);

    return [players, setPlayers];
};
export default usePlayers;