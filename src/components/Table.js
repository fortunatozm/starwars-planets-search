import React, { useContext, useEffect } from 'react';
import InitialContext from '../context/contextIn';
import funcAPI from '../apiService/apiPlanets';

function Table() {
  const {
    planets, setPlanets,
    filterByName: { name },
    checkRender, originalSetPlanets } = useContext(InitialContext);

  useEffect(() => {
    const apiReturn = async () => {
      const result = await funcAPI();
      setPlanets([...result.results]);
      originalSetPlanets([...result.results]);
    };
    apiReturn();
  }, []);

  const renderTable = () => {
    if (checkRender) {
      return (
        planets === undefined ? undefined : planets.filter((filterName) => (
          (filterName.name.toUpperCase()).includes(name.toUpperCase())
        )).map((result) => (
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
        )));
    }
    return planets === undefined ? undefined : planets.filter((filterName) => (
      (filterName.name.toUpperCase()).includes(name.toUpperCase())
    )).map((result) => (
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

  console.log(planets);
  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        { renderTable() }
      </tbody>
    </table>
  );
}

export default Table;
