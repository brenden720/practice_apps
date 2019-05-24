import React from 'react';

const DealerCardCount = props => {
  const {count} = props;
  return (
    <div className="dealerCardCount">{count}</div>
  );
};

export default DealerCardCount;
