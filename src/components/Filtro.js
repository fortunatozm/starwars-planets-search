import React from 'react';

function Filtro() {
  // const [filter, setFilter] = useState({
  //   filterByNumericValues: {
  //     column: 'population',
  //     comparison: 'maior que',
  //     value: '100000',
  //   },
  // });
  return (
    <section>
      <label htmlFor="filtro">
        Coluna
        <select id="filtro" data-testid="column-filter">
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
        <select id="comparison" data-testid="comparison-filter">
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
        <input data-testid="value-filter" id="number" type="number" />
      </label>
      <button data-testid="button-filter" type="button">
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
