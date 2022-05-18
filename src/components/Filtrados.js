import React, { useContext } from 'react';
import InitialContext from '../context/contextIn';

function Filtrados() {
  const { filterByNumericValues, setFilterByNumericValues,
    originalPlanets, planets, setPlanets } = useContext(InitialContext);
  const removeFilter = ({ target }) => {
    const valor = target.name;
    if (filterByNumericValues.some((someValue) => someValue.column === valor)) {
      setFilterByNumericValues(filterByNumericValues
        .filter((filter) => filter.column !== valor));
      if (filterByNumericValues.length === 0 || !filterByNumericValues) {
        setPlanets(originalPlanets);
      } else {
        console.log('Entrou');
        setPlanets(originalPlanets);
        filterByNumericValues.map((filterValue) => {
          if (filterValue.comparison === 'maior que') {
            return (
              setPlanets(planets.filter((filtro) => filtro.column > filtro.value))
            );
          } if (filterValue.comparison === 'menor que') {
            return setPlanets(planets.filter((filtro) => filtro.column < filtro.value));
          }
          return setPlanets(originalPlanets
            .filter((filtro) => filtro.column === filtro.value));
        });
      }
    }
  };
  console.log(filterByNumericValues);
  return (
    <div>
      { filterByNumericValues.length === 0 ? undefined
        : filterByNumericValues.map((filtros) => (
          <p key={ Math.random() } data-testid="filter">
            { `${filtros.column} ` }
            { `${filtros.comparison} ` }
            { `${filtros.value} ` }
            <button type="button" onClick={ removeFilter } name={ filtros.column }>
              X
            </button>
          </p>
        )) }
    </div>
  );
}

export default Filtrados;
