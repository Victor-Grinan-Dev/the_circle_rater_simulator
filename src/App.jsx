import './App.css';
import { playersList } from './classes/gameConfig';
import { Player } from './classes/circlePlayer';
import { useEffect, useState } from 'react';
import PlayerCard from './components/PlayerCard';

const btnStyle = {
  border: "solid tomato 5px",
  borderRadius: "5px",
  backgroundColor: "tomato",
}


function App() {
  const [players, setPlayers] = useState([]);
  const [isRatesComplete, setIsRatesComplete] = useState(false);

  useEffect(() => {
    createPlayers();
  }, []);
  
  const createPlayers = () => {
    if(playersList){
      const tempList = [];
      for (let player of playersList){
        const newPlayer = new Player(player);
        newPlayer.myRates = Array(playersList.length - 1).fill(null);
        tempList.push(newPlayer);
      };
      setPlayers(tempList);
    }
  };

  const handleRatesComplete = () => {
    let ok = false;
    for (let player of players){
      if(player.myRatings.length === players.length - 1){
        console.log(`${player.name} is ready`);
        ok = true;
      }else{
        console.log(`${player.name} is NOT ready`);
        return false; // do we need return?
      }
    }
    if(ok){
      setIsRatesComplete(true);
    }
    return true; // do we need return?
  }
  const handleResolve = () => {
    handleRatesComplete();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Circle</h1>
        {
          // console.log(players)
        }
        {
          players.map((player, i)=>(
            <PlayerCard key={i} name={player.name} position={i+1} ratesDone={player.ratesDone} data={player} allPlayers={players}/>
          ))
        }
        <input type="button" value="Resolve" className='resolveBtn' style={btnStyle} onClick={()=>{
          if(isRatesComplete){
            handleResolve();
          }else{
            alert('Rates are incomplete')
          }
          }}/>
      </header>
    </div>
  );
}

export default App;
