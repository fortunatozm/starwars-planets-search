import React, { useContext, useState } from 'react';
import InitialContext from '../context/contextIn';

function Filtro() {
  // filterByNumericValues: { column, comparison, value },
  const {
    planets, setPlanets,
    setCheckRender, setFilterByNumericValues,
    filterByNumericValues } = useContext(InitialContext);

  const [filterLocal, setFilterLocal] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const hendleFilter = () => {
    setCheckRender(false);
    setFilterByNumericValues([...filterByNumericValues, filterLocal]);
    const { column, comparison, value } = filterLocal;
    if (comparison === 'maior que') {
      setPlanets(planets.filter((planet) => (
        Number(planet[column]) > Number(value))));
    } else if (comparison === 'menor que') {
      setPlanets(planets.filter((planet) => (
        Number(planet[column]) < Number(value))));
    } else if (comparison === 'igual a') {
      setPlanets(planets.filter((planet) => (
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
            const valor = target.value;
            setFilterLocal((prevState) => (
              { ...prevState, column: valor }));
          } }
          data-testid="column-filter"
          value={ filterLocal.column }
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
          value={ filterLocal.comparison }
          onChange={ ({ target }) => {
            const valor = target.value;
            setFilterLocal((prevState) => (
              { ...prevState, comparison: valor }));
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
          value={ filterLocal.value }
          onChange={ ({ target }) => {
            const valor = target.value;
            setFilterLocal((prevState) => (
              { ...prevState, value: valor }));
          } }
        />
      </label>
      <button
        data-testid="button-filter"
        name="button"
        type="button"
        onClick={ hendleFilter }
      >
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
