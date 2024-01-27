import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SetQueryParamComponent from './components'

function App() {
  return (
    <Router>
      <SetQueryParamComponent/>
    </Router>
  );
}

export default App;
