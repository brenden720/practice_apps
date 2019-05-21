import React from 'react';

const List = (props) => {
  if (props.data === null) {
    return <div className="noFoundPokemon">No Pokemon Found</div>;
  }

  const {name, height, weight, sprites} = props.data;
  const nameCap = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="pokemon">
      <div className="name">{nameCap}</div>
      <img className="pokemonImg" src={sprites ? sprites.front_default : ''} />
      <ul className="pokemonStats">
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
      </ul>
    </div>
  );
};

export default List;
