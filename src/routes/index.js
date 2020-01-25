import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Starships from '../pages/Starships';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/starships" component={Starships} />
      </Switch>
    </BrowserRouter>
  );
}
