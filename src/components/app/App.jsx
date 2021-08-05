import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import QueenList from '../queens/QueenList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={QueenList} />
      </Switch>
    </Router>
  );
}
