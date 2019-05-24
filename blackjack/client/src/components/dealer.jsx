import React from 'react';


// details to be added later
const Dealer = props => {
  const { cards } = props;

  return (
    <div className="dealerContainer">
      <div>Dealer</div>
      <div>{cards.map(card => {
        return <span>{card + ' '}</span>;
      })}</div>
    </div>

  );
};

export default Dealer;
