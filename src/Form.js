import React, {useState} from 'react';

const Form = ({setPlayerCallback}) =>  {
    const [localPlayers, setLocalPlayers] = useState({
        player1 : '',
        player2: '',
    });

    const handleSubmit = () => {
        setPlayerCallback(localPlayers);
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