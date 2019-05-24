import React from 'react';

const StayButton = props => {
  const { dealerHit } = props;
  return (
    <button type="button" className="stayButton" onClick={dealerHit}>Stay</button>
  );
};

export default StayButton;
