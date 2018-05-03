import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    // axios.get("http://pokeapi.co/api/v2/pokemon/")
    // .then(res => {
    //   console.log(res.data.results);
    // })
  }

  render() {
    return (

      <div className="App">
        <div className = "Header"> </div>
        <div className = "Content">
        <div className = "One"> </div>
        <div className = "One"> </div>
        <div className = "One"> </div>
        <div className = "One"> </div>
        </div>
      </div>
    );
  }
}

export default App;
