import React from 'react';
import cardStyle from './cardStyle.module.css';

const PlayerCard = (props) => {
  return (
    <div className={cardStyle.card}>
      <p className={cardStyle.name}>{props.name}</p>
    </div>
  )
}

export default PlayerCard;