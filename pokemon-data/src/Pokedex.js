import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Pokedex extends Component {

  state = {
    pokemon: "",
    name: "test",
    style: "none",
    image: "https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif",
    entry: "",
    description: ""
  }

  componentDidMount() {
    axios.get("http://pokeapi.co/api/v2/pokemon/")
      .then(res => { 
        let totalPokemon = 802;
        this.setState({ pokemon: res.data.results.slice(0, totalPokemon) }) })
  }

  modelBox = (pokemon, image, index) => {
    this.setState({ name: pokemon })
    this.setState({ image})
    this.setState({entry: index})

    axios.get("https://pokeapi.co/api/v2/pokemon-species/" + index)
   .then(res => {
    var englishDesc = res.data.flavor_text_entries.filter(description => description.language.name == "en")
    this.setState({description: englishDesc[Object.keys(englishDesc)[0]].flavor_text})
   })

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
                <div className="One" onClick={this.modelBox.bind(null, pokemon.name.toUpperCase(), `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`, index+1)}>
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
            <h1>Entry: {this.state.entry}</h1>
            <h1>{this.state.name}</h1>
            <img src={`${this.state.image}`} alt="Pokemon" />
            <h1>Description: {this.state.description}</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default Pokedex;
