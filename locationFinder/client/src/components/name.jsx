import React from 'react';

const Name = (props) => {

  return (
    <div className="name">
      First Name: <input type="text" name="firstName" className="firstName"></input>
      Last Name: <input type="text" name="lastName" className="lastName"></input>
    </div>
  );
};

export default Name;
