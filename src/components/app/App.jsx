import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Header';
import QueenList from '../queens/QueenList';
import QueenDetail from '../details/QueenDetail';

export default function App() {
  return (
    // remove Router here and move to App??
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={QueenList} />
        <Route exact path="/:id" component={QueenDetail} />
      </Switch>
    </Router>
  );
}
