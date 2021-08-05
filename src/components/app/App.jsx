import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import QueenList from '../queens/QueenList';
import QueenDetail from '../details/QueenDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={QueenList} />
        <Route exact path="/:id" component={QueenDetail} />
      </Switch>
    </Router>
  );
}
