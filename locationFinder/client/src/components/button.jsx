import React from 'react';

const Button = (props) => {
  const {handleSubmit} = props;
  return (
    <button type="submit" onSubmit={handleSubmit}>Submit</button>
  );
};

export default Button;
