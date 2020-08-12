import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Switch>
    <Route exact path='/:car'>
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
    </Route>

    <Route path='/'>
    <div className="box">
      <Home />
      </div>
    </Route>
    </Switch>
  );
};

export default App;
