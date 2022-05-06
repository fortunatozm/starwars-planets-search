import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialContext from './contextIn';
import funcAPI from '../apiService/apiPlanets';

function ProviderIni({ children }) {
  const [planets, setPlanets] = useState({});

  const [filterByName, setfilterByName] = useState({
    name: '',
  });

  const [checkRender, setCheckRender] = useState(true);

  const [newResults, setNewResults] = useState([]);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  async function apiReturn() {
    const result = await funcAPI();
    setPlanets(result);
  }

  const values = {
    planets,
    setPlanets,
    apiReturn,
    filterByName,
    setfilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    checkRender,
    setCheckRender,
    newResults,
    setNewResults,
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
