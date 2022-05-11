import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialContext from './contextIn';

function ProviderIni({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [filterByName, setfilterByName] = useState({
    name: '',
  });

  const [checkRender, setCheckRender] = useState(true);

  const [newResults, setNewResults] = useState([]);

  const values = {
    planets,
    setPlanets,
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
