import React from 'react';

const BustedButton = props => {
  const {replay, isPlayerBusted, isDealerBusted, playerCount, dealerCount} = props;
  if (isDealerBusted) {
    return (
      <button type="button" className="dealerBustedButton" onClick={replay}>Dealer Busted. Deal Again</button>
    );
  } else if (isPlayerBusted) {
    return (
      <button type="button" className="playerBustedButton" onClick={replay}>You Busted. Deal Again</button>
    );
  } else if (playerCount > dealerCount) {
    return (
      <button type="button" className="gameCompleteButton" onClick={replay}>You win. Deal Again</button>
    );
  } else if (dealerCount > playerCount && !isDealerBusted) {
    return (
      <button type="button" className="gameCompleteButton" onClick={replay}>Dealer wins. Deal Again</button>
    );
  } else {
    return (
      <button type="button" className="gameCompleteButton" onClick={replay}>Push. Deal Again</button>
    );
  }
};

export default BustedButton;