import React, { useContext, useEffect } from 'react';
import InitialContext from '../context/contextIn';

function Table() {
  const { apiReturn,
    planets: { results },
    filterByName: { name },
    newResults, checkRender } = useContext(InitialContext);

  useEffect(() => {
    apiReturn();
  });

  const renderTable = () => {
    if (checkRender) {
      return results === undefined ? undefined : results.filter((filterName) => (
        (filterName.name.toUpperCase()).includes(name.toUpperCase()))).map((result) => (
        <tr key={ result.created }>
          <td>
            { result.name }
          </td>
          <td>
            { result.rotation_period }
          </td>
          <td>
            { result.orbital_period }
          </td>
          <td>
            { result.diameter }
          </td>
          <td>
            { result.climate }
          </td>
          <td>
            { result.gravity }
          </td>
          <td>
            { result.terrain }
          </td>
          <td>
            { result.surface_water }
          </td>
          <td>
            { result.population }
          </td>
          <td>
            { result.films.map((film) => film) }
          </td>
          <td>
            { result.created }
          </td>
          <td>
            { result.edited }
          </td>
          <td>
            { result.url }
          </td>
        </tr>
      ));
    }
    return newResults === undefined ? undefined : newResults.filter((filterName) => (
      (filterName.name.toUpperCase()).includes(name.toUpperCase()))).map((result) => (
      <tr key={ result.created }>
        <td>
          { result.name }
        </td>
        <td>
          { result.rotation_period }
        </td>
        <td>
          { result.orbital_period }
        </td>
        <td>
          { result.diameter }
        </td>
        <td>
          { result.climate }
        </td>
        <td>
          { result.gravity }
        </td>
        <td>
          { result.terrain }
        </td>
        <td>
          { result.surface_water }
        </td>
        <td>
          { result.population }
        </td>
        <td>
          { result.films.map((film) => film) }
        </td>
        <td>
          { result.created }
        </td>
        <td>
          { result.edited }
        </td>
        <td>
          { result.url }
        </td>
      </tr>
    ));
  };

  console.log(results);
  console.log(newResults);
  return (
    <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          Rotation Period
        </th>
        <th>
          Orbital Period
        </th>
        <th>
          Diameter
        </th>
        <th>
          Climate
        </th>
        <th>
          Gravity
        </th>
        <th>
          Terrain
        </th>
        <th>
          Surface Water
        </th>
        <th>
          Population
        </th>
        <th>
          Films
        </th>
        <th>
          Created
        </th>
        <th>
          Edited
        </th>
        <th>
          URL
        </th>
      </tr>
      { renderTable() }
    </table>
  );
}

export default Table;
