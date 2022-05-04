import React from 'react';
import './App.css';
import ProviderIni from './context/providerIni';
import Table from './components/Table';
import Search from './components/Search';
import Filtro from './components/Filtro';

function App() {
  return (
    <ProviderIni>
      <Search />
      <Filtro />
      <Table />
    </ProviderIni>
  );
}

export default App;
