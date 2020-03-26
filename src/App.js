import React from 'react';
import './index.css';

import Form from "./Form";
import GameHook from "./Game";
import usePlayers from "./usePlayers";

const PlayersContext = React.createContext({});

function App() {

    const [players, setPlayers] = usePlayers();

    return (
        <div className="App">
            <PlayersContext.Provider value={[players, setPlayers]}>
                {(players.player1 !== "" && <GameHook />) || <Form setPlayerCallback={setPlayers} />}
            </PlayersContext.Provider>
        </div>
    );
}

export {PlayersContext}
export default App;