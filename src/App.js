import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Instructions from './components/Instructions/Instructions';
import Resources from './components/Resources/Resources';
import Assessments from './components/Activities/Activities';
import StudentCommunication from './components/StudentCommunication/StudentCommunication';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Instructions} />
      <Route path="/resources" component={Resources} />
      <Route path="/assessments" component={Assessments}/>
      <Route path="/communication" component={StudentCommunication}/>
    </Router>
  );
}

export default App;
