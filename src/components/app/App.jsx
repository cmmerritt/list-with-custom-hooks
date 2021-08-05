import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import QueenList from '../queens/QueenList';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={QueenList} />
    </Switch>
  );
}
