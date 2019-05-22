import React from 'react';

const Location = (props) => {
  const {handleClick, location} = props;
  if (location) {
    return (
      <div className="location">
        <div>Location: {location}</div>
      </div>
    );
  } else {
    return (
      <div className="location">
        Location: <button type="button" onClick={handleClick}>Get Location</button>
      </div>
    );
  }
};

export default Location;
