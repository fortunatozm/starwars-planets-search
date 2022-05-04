import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialContext from './contextIn';
import funcAPI from '../apiService/apiPlanets';

function ProviderIni({ children }) {
  const [planets, setPlanets] = useState({});

  const [filterByName, setfilterByName] = useState({
    name: '',
  });

  async function apiReturn() {
    const result = await funcAPI();
    setPlanets(result);
  }

  const values = {
    planets,
    apiReturn,
    filterByName,
    setfilterByName,
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
