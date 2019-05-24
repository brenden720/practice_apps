import React from 'react';


// details to be added later
const Player = props => {
  const {cards} = props;
  
  return (
    <div className="playerContainer">
      <div>Player</div>
      <div>{cards.map(card => {
        return <span>{card + ' '}</span>;
      })}</div>
    </div>

  );
};

export default Player;
