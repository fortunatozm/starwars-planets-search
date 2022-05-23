import React, { useContext, useEffect } from 'react';
import InitialContext from '../context/contextIn';
import funcAPI from '../apiService/apiPlanets';

function Table() {
  const {
    planets, setPlanets, order,
    filterByName: { name },
    checkRender, originalSetPlanets, originalPlanets } = useContext(InitialContext);

  useEffect(() => {
    const apiReturn = async () => {
      const result = await funcAPI();
      // setPlanets([...result.results]);
      originalSetPlanets([...result.results]);
    };
    apiReturn();
  }, []);

  useEffect(() => {
    setPlanets(originalPlanets);
    console.log(order);
    let data = [...originalPlanets];
    // let resultArray = [];
    // console.log('Entrei');
    const NEGATIVENUMBER = -1;
    const POSETIVENUMBER = 1;
    const { column, sort } = order;

    if (column === 'population') {
      const dados = data.filter((dado) => dado[column] !== 'unknown');
      const unknow = data.filter((dado) => dado[column] === 'unknown');
      data = [...dados, ...unknow];
    }

    if (column === 'name') {
      data.sort((a, b) => {
        const firstName = a[column];
        const secondName = b[column];
        return firstName > secondName ? POSETIVENUMBER : NEGATIVENUMBER;
      });
    }

    if (sort === 'ASC') {
      data.sort((a, b) => {
        // console.log('Aqui');
        const firstName = Number(a[column]);
        const secondName = Number(b[column]);
        // return firstName > secondName ? POSETIVENUMBER : POSETIVENUMBER;
        return firstName - secondName;
        // return firstName > secondName ? POSETIVENUMBER : POSETIVENUMBER;
      });
    } else if (sort === 'DESC') {
      data.sort((a, b) => {
        // console.log(a[column]);
        const firstName = Number(a[column]);
        const secondName = Number(b[column]);
        return secondName - firstName;
        // return firstName < secondName ? NEGATIVENUMBER : POSETIVENUMBER;
      });
      // console.log(dados);
    }
    setPlanets(data);
    // console.log(planets);
  }, [order, originalPlanets]);

  // useEffect();

  // console.log(column, sort);

  const renderTable = () => {
    if (checkRender) {
      return (
        planets === undefined ? undefined : planets.filter((filterName) => (
          (filterName.name.toUpperCase()).includes(name.toUpperCase())
        )).map((result) => (
          <tr key={ result.created }>
            <td data-testid="planet-name">
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
        <td data-testid="planet-name">
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
