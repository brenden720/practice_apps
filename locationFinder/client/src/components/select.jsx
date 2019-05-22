import React from 'react';

const Select = (props) => {
  const ageArray = ['-'];
  for (let i = 1; i <= 100; i++) {
    ageArray.push(i);
  }

  return (
    <div className="age">
      Age: <select className="ageSelect">
        {ageArray.map((age, idx) => {
          return <option key={idx} value={`${age}`}>{age}</option>;
        })}
      </select>

    </div>
  );
};

export default Select;
