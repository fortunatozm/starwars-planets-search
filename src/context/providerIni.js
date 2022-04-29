import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialContext from './contextIn';
import funcAPI from '../apiService/apiPlanets';

function ProviderIni({ children }) {
  const [planets, setPlanets] = useState('Fortunato');

  async function apiReturn() {
    const result = await funcAPI();
    // console.log(children);
    setPlanets(result);
  }
  return (
    <InitialContext.Provider value={ { planets, apiReturn } }>
      { children }
    </InitialContext.Provider>
  );
}

ProviderIni.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderIni;
