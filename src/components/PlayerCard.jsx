import React from 'react';
import { useEffect, useState } from 'react';

const card = {
  minHeight: "150px",
  width:"150px",
  borderRadius: "20px",
  backgroundColor: "azure",
  border: "solid black 5px",
  textAlign: "center",
  textTransform: "capitalize",
  color: "black",
};

const PlayerCard = ({name, position, ratesDone, allPlayers}) => {
  const [otherPlayers, setOtherPlayers] = useState([]);

  useEffect(() => {
    definePlayersToRate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const definePlayersToRate = () => {
    const result = allPlayers.filter((player) =>{
      return player.name !== name;
    });
    setOtherPlayers(result);
    
  };

  const choiceHandler = (e) => {
    console.log("position:",e.target.name, e.target.value);
    for(let player of otherPlayers){
      if(e.target.value === player.name){
        console.log(player.name)
        player.ranksValues.push(e.target.name);
        player.isChosen = true;
      }
    }
    console.log(otherPlayers)
  };
  
  const ratingSubmitHandler = () =>{

  };
  
  return (
    <div className="card" style={card} >
      <p className="name">{name}</p>
      <p className='position'>{position}</p>
      <p>{ratesDone || null}</p>
      {
        // ratesDone && <p className='ratesDone'>✅</p>
      }
      {
        otherPlayers && otherPlayers.map((_, i) => (
          <select onChange={(e) => choiceHandler(e)} key={i} name={`${i + 1}`}>
            <option hidden > {`position: ${i + 1}`} </option>
            {
              otherPlayers.map((player, j) => (
                <option 
                  value={player.name} 
                  name={`${i + 1}`} 
                  key={`${i}${j}`} 
                  >
                  {player.name}
                </option>
              ))
            }
          </select>
        ))
      }
      <input type="submit" value='Submit Ratings' onClick={ratingSubmitHandler}/>
    </div>
  )
}

export default PlayerCard;