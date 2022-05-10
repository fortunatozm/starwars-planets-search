import React, { useContext } from 'react';
import InitialContext from '../context/contextIn';

function Filtro() {
  const { filterByNumericValues: { column, comparison, value },
    setFilterByNumericValues,
    newResults,
    setCheckRender,
    setNewResults } = useContext(InitialContext);

  const hendleFilter = () => {
    setCheckRender(false);
    if (comparison === 'maior que') {
      setNewResults(newResults.filter((planet) => (
        Number(planet[column]) > Number(value))));
    } else if (comparison === 'menor que') {
      setNewResults(newResults.filter((planet) => (
        Number(planet[column]) < Number(value))));
    } else if (comparison === 'igual a') {
      setNewResults(newResults.filter((planet) => (
        Number(planet[column]) === Number(value))));
    }
  };

  return (
    <section>
      <label htmlFor="filtro">
        Coluna
        <select
          id="filtro"
          onChange={ ({ target }) => {
            setFilterByNumericValues((prevState) => (
              { ...prevState, column: target.value }));
          } }
          data-testid="column-filter"
          value={ column }
        >
          <option>
            population
          </option>
          <option>
            orbital_period
          </option>
          <option>
            diameter
          </option>
          <option>
            rotation_period
          </option>
          <option>
            surface_water
          </option>
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => {
            setFilterByNumericValues((prevState) => (
              { ...prevState, comparison: target.value }));
          } }
        >
          <option>
            maior que
          </option>
          <option>
            menor que
          </option>
          <option>
            igual a
          </option>
        </select>
      </label>
      <label htmlFor="number">
        <input
          data-testid="value-filter"
          id="number"
          type="number"
          value={ value }
          onChange={ ({ target }) => {
            setFilterByNumericValues((prevState) => (
              { ...prevState, value: target.value }));
          } }
        />
      </label>
      <button data-testid="button-filter" type="button" onClick={ hendleFilter }>
        FILTRAR
      </button>
      <label htmlFor="ordenar">
        Ordenar
        <select id="ordenar">
          <option>
            population
          </option>
        </select>
      </label>
      <label htmlFor="ascendente">
        <input name="classificacao" id="ascendente" type="radio" />
        Ascendente
      </label>
      <label htmlFor="descendente">
        <input name="classificacao" id="descendente" type="radio" />
        Descendente
      </label>
    </section>
  );
}

export default Filtro;
