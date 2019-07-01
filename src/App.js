import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Instructions from './components/Instructions/Instructions';
import Resources from './components/Resources/Resources';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Instructions} />
      <Route path="/resources" component={Resources} />
    </Router>
  );
}

export default App;
