import React, { useContext, useState } from 'react';
import InitialContext from '../context/contextIn';

function Filtro() {
  const {
    setPlanets, setOrder,
    setCheckRender, setFilterByNumericValues,
    filterByNumericValues, originalPlanets } = useContext(InitialContext);

  const [colunaOptions, setColunaOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const [localOrder, setLocalOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const [filterLocal, setFilterLocal] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const removeAllFilters = () => {
    setFilterByNumericValues([]);
    setPlanets(originalPlanets);
  };

  const hendleFilter = () => {
    setCheckRender(false);
    const { column } = filterLocal;

    if (colunaOptions.includes(column)) {
      setColunaOptions(colunaOptions.filter((coluna) => coluna !== column));
    } else {
      setColunaOptions(colunaOptions);
    }
    setFilterByNumericValues([...filterByNumericValues, filterLocal]);
    // if (comparison === 'maior que') {
    //   setPlanets(planets.filter((planet) => (
    //     Number(planet[column]) > Number(value))));
    // } else if (comparison === 'menor que') {
    //   setPlanets(planets.filter((planet) => (
    //     Number(planet[column]) < Number(value))));
    // } else if (comparison === 'igual a') {
    //   setPlanets(planets.filter((planet) => (
    //     Number(planet[column]) === Number(value))));
    // }
  };

  const funcOrder = () => {
    // console.log(localOrder);
    setOrder(localOrder);
  };

  const saveOrder = ({ target }) => {
    const valor = target.value;
    setLocalOrder({ ...localOrder, sort: valor });
    // console.log(localOrder);
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
          { colunaOptions.length === 0 ? undefined
            : colunaOptions.map((coluna, index) => (
              <option key={ index }>
                { coluna }
              </option>
            )) }
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
        <select
          id="ordenar"
          data-testid="column-sort"
          onChange={ ({ target }) => {
            const valor = target.value;
            setLocalOrder((prevState) => (
              { ...prevState, column: valor }));
          } }
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
      <label htmlFor="ascendente">
        <input
          value="ASC"
          name="classificacao"
          id="ascendente"
          type="radio"
          data-testid="column-sort-input-asc"
          onChange={ saveOrder }
        />
        Ascendente
      </label>
      <label htmlFor="descendente">
        <input
          value="DESC"
          name="classificacao"
          id="descendente"
          type="radio"
          data-testid="column-sort-input-desc"
          onChange={ saveOrder }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ funcOrder }
      >
        ORDENAR
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        REMOVER FILTROS
      </button>
    </section>
  );
}

export default Filtro;
