import React, { useContext } from 'react';
import InitialContext from '../context/contextIn';

function Search() {
  const { name, setfilterByName, filterByName } = useContext(InitialContext);

  console.log(filterByName.name);
  return (
    <header>
      <h1>
        Projeto Star Wars - Trybe
      </h1>
      <label htmlFor="search">
        <input
          id="search"
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target }) => setfilterByName({ name: target.value }) }
        />
      </label>
    </header>
  );
}

export default Search;
