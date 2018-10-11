import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Pokedex  from './Pokedex';
import Navbar from './Navbar';
import Game from './Game';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {Pokedex} />
        <Route exact path = '/Game' component = {Game} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
