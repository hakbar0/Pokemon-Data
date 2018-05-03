import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    pokemon: ""
  }

  componentDidMount() {
    axios.get("http://pokeapi.co/api/v2/pokemon/")
      .then(res => { this.setState({ pokemon: res.data.results }) })
  }

  render() {
    return (
      <div className="App">
        <div className="Header"></div>
        <div className="Content">

          {this.state.pokemon ?
            this.state.pokemon.map(function (pokemon, index) {
              return (
                <div className="One">
                  <h2>{pokemon.name.toUpperCase()}</h2>
                  <img src=  {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                </div>
              )
            }, this) : "loading"
          }
        </div>
      </div>
    );
  }
}

export default App;
