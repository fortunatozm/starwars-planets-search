// import apiResults from './apiResults.json';

const funcAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJSON = await response.json();
  return responseJSON;
};

// apiResults;

export default funcAPI;
