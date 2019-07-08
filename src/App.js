import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Instructions from './components/Instructions/Instructions';
import Resources from './components/Resources/Resources';
import Assessments from './components/Activities/Activities';
import StudentCommunication from './components/StudentCommunication/StudentCommunication';
import MoreLearning from './components/MoreLearning/MoreLearning';
import Experiment from './components/Experiment/Experiment';

function App() {
  return (
    <Router>
      <Switch>
        {/* we're telling the app which view to render depending on which URL the user enters into their browser */}
        <Route exact path="/" component={Instructions} />
        <Route path="/resources" component={Resources} />
        <Route path="/assessments" component={Assessments} />
        <Route path="/communication" component={StudentCommunication} />
        <Route path="/more" component={MoreLearning}/>
        <Route path="/experiment" component={Experiment}/>
        {/* if no path, create a page with a 404 message */}
        <Route render={() => <h1>404: Page Not Found</h1>}/>
      </Switch>
    </Router>
  );
}

export default App;
