import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialContext from './contextIn';

function ProviderIni({ children }) {
  const [planets, setPlanets] = useState([]);

  const [originalPlanets, originalSetPlanets] = useState([]);

  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const [filterByName, setfilterByName] = useState({
    name: '',
  });

  const [checkRender, setCheckRender] = useState(true);

  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const values = {
    planets,
    setPlanets,
    filterByName,
    setfilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    checkRender,
    setCheckRender,
    originalPlanets,
    originalSetPlanets,
    order,
    setOrder,
  };

  return (
    <InitialContext.Provider value={ values }>
      { children }
    </InitialContext.Provider>
  );
}

ProviderIni.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderIni;
