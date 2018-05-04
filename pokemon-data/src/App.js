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
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="pokemon" />
                 
                  <div id="myModal" className="modal1">
                    <div className="modal-content1">
                      <span className="close1">&times;</span>
                      <p>Some text in the Modal..</p>
                    </div>

                  </div>

                </div>
              )
            }, this) : <img src={`https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif`} alt="loading" />
          }
        </div>
      </div>
    );
  }
}

export default App;
