import apiResults from './apiResults.json';

const funcAPI = async () => apiResults.results;
// {

//   const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
//   const responseJSON = await response.json();
//   return responseJSON;
// };

export default funcAPI;
