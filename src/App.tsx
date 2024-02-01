import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchBar } from './components/Header';
import { Content } from './components/Content';

function App() {
  return (
    <Router>
      <SearchBar />
      <Content />
    </Router>
  );
}

export default App;
