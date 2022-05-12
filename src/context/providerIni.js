import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialContext from './contextIn';

function ProviderIni({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const [filterByName, setfilterByName] = useState({
    name: '',
  });

  const [checkRender, setCheckRender] = useState(true);

  const values = {
    planets,
    setPlanets,
    filterByName,
    setfilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    checkRender,
    setCheckRender,
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
