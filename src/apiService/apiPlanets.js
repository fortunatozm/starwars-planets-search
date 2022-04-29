// import React from 'react';

const funcAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJSON = await response.json();
  return responseJSON;
};

export default funcAPI;
