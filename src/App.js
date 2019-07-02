import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Instructions from './components/Instructions/Instructions';
import Resources from './components/Resources/Resources';
import Assessments from './components/Activities/Activities';
import StudentCommunication from './components/StudentCommunication/StudentCommunication';
import MoreLearning from './components/MoreLearning/MoreLearning';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Instructions} />
        <Route path="/resources" component={Resources} />
        <Route path="/assessments" component={Assessments} />
        <Route path="/communication" component={StudentCommunication} />
        <Route path="/more" component={MoreLearning}/>
        <Route render={() => <h1>404: Page Not Found</h1>}/>
      </Switch>
    </Router>
  );
}

export default App;
