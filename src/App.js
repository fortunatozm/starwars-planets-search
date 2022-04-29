import React from 'react';
import './App.css';
import ProviderIni from './context/providerIni';
import Table from './components/Table';

function App() {
  return (
    <ProviderIni>
      <Table />
    </ProviderIni>
  );
}

export default App;
