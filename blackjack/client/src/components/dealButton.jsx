import React from 'react';

const DealButton = props => {
  const {dealCards} = props;
  return (
    <button type="button" className="dealButton" onClick={dealCards}>Deal</button>
  );
};

export default DealButton;
