import React from 'react';

const HitButton = props => {
  const {playerHit} = props;
  return (
    <button type="button" className="hitButton" onClick={playerHit}>Hit</button>
  );
};

export default HitButton;
