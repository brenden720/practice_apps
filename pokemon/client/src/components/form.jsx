import React from 'react';

const Form = (props) => {
  const {onFormChange, onFormSubmit} = props;
  
  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text"
        name="name"
        onChange={onFormChange}
      />
      <input 
        type="submit"
        value="submit"
      />
    </form>
  );
};

export default Form;
