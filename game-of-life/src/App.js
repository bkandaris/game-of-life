import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Automata from './Automata';
import Rules from './Rules';
import Game from './Game';

function App() {
  return (
    <Router>
      <Switch>
        <div className='app'>
          <Nav />
          <Route exact path='/' component={Game} />
          <Route path='/rules' component={Rules} />
          <Route path='/automata' component={Automata} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
