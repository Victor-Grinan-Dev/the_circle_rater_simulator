import './App.css';

import { playersList } from './classes/gameConfig';
import { Player } from './classes/circlePlayer';
import { RatingRound } from './classes/ratingRound';
import { useEffect, useState } from 'react';
import PlayerCard from './components/PlayerCard';
function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    createPlayers();
  }, []);
  
  const createPlayers = () => {
    if(playersList){
      const tempList = [];
      for (let player of playersList){
        const newPlayer = new Player(player);
        tempList.push(newPlayer);
      };
      setPlayers(tempList);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Circle</h1>
        {
          players.map((player, i)=>(
            <PlayerCard key={i} name={player.name}/>
          ))
        }
      </header>

    </div>
  );
}

export default App;
