import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import usePlayers from "./usePlayers";
import Game from "./Game";

function Form() {
    const [players, setPlayers] = usePlayers();
    const [localPlayers, setLocalPlayers] = useState({
        player1 : '',
        player2: '',
    });

    const handleSubmit = () => {
        setPlayers(localPlayers);
        ReactDOM.render(
            <Game />,
            document.getElementById('root')
        );
    };

    return (
        <div>
            <div>
                <label>Joueur 1</label>
                <input name="player_1" type="text" value={localPlayers.player1}  onChange={e => setLocalPlayers({ ...localPlayers,  player1: e.target.value })} />
                <label>Joueur 2</label>
                <input name="player_2" type="text" value={localPlayers.player2} onChange={e => setLocalPlayers({...localPlayers, player2: e.target.value })} />
                <input type="submit" value="envoyer" onClick={() => handleSubmit()} />
            </div>
        </div>
    );
}
export default Form;