import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    pokemon: "",
    name: "test",
    style: "block",
    image: "https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif"
  }

  componentDidMount() {
    axios.get("http://pokeapi.co/api/v2/pokemon/")
      .then(res => { this.setState({ pokemon: res.data.results }) })
  }

  modelBox = (pokemon, image) => {
    this.setState({ name: pokemon })
    this.setState({ image: image })
    this.hide("block");
  }

  hide = (show) => {
    this.setState({ style: show })
  }

  render() {
    return (
      <div className="App">
        <div className="Header"></div>

        <div className="Content">
          {this.state.pokemon ?
            this.state.pokemon.map(function (pokemon, index) {
              return (
                <div className="One" onClick={this.modelBox.bind(null, pokemon.name.toUpperCase(), `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`)}>
                  <h2>{pokemon.name.toUpperCase()}</h2>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="pokemon" />
                </div>
              )
            }, this) : <img src={`https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif`} alt="loading" />
          }
        </div>

        <div id="myModal" className={`modal`} style={{ display: this.state.style }}>
          <div className={`modal-content`}>
            <span className={`close`} onClick={this.hide.bind(null, "none")}>&times;</span>
            <h1>{this.state.name}</h1>
            <img src={`${this.state.image}`} alt="Pokemon" />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
