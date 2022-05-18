import React from 'react';
import './App.css';
import ProviderIni from './context/providerIni';
import Table from './components/Table';
import Search from './components/Search';
import Filtro from './components/Filtro';
import Filtrados from './components/Filtrados';

function App() {
  return (
    <ProviderIni>
      <Search />
      <Filtro />
      <Filtrados />
      <Table />
    </ProviderIni>
  );
}

export default App;
