import React from 'react';

const PlayerCardCount = props => {
  const {count} = props;
  return (
    <div className="playerCardCount">{count}</div>
  );
};

export default PlayerCardCount;
