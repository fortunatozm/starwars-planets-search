import React, { useContext, useEffect, useState } from 'react';
import InitialContext from '../context/contextIn';

function Filtrados() {
  const { filterByNumericValues, setFilterByNumericValues,
    originalPlanets, setPlanets, planets } = useContext(InitialContext);

  const [isTrue, setIstrue] = useState(false);

  useEffect(() => {
    const actualPlanets = isTrue ? originalPlanets : planets;
    if (filterByNumericValues.length === 0 || !filterByNumericValues) {
      setPlanets(originalPlanets);
    } else {
      filterByNumericValues.map((filterValue) => {
        const { column, value, comparison } = filterValue;
        if (comparison === 'maior que') {
          return (
            setPlanets(actualPlanets
              .filter((filtro) => Number(filtro[column]) > Number(value)))
          );
        } if (comparison === 'menor que') {
          return setPlanets(actualPlanets
            .filter((filtro) => Number(filtro[column]) < Number(value)));
        }
        return setPlanets(actualPlanets
          .filter((filtro) => Number(filtro[column]) === Number(value)));
      });
      setIstrue(false);
    }
  }, [filterByNumericValues]);

  const removeFilter = ({ target }) => {
    setIstrue(true);
    const valor = target.name;
    setFilterByNumericValues(filterByNumericValues
      .filter((filter) => filter.column !== valor));
  };

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
