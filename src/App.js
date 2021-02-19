import React, { Component } from 'react';
// import Pokecard from './Pokecard';
import './App.css';
import Pokedex from './Pokedex';

/*<Pokecard 
        id={4}
        name="Charmander"
        type="fire"
        exp={62}
        
      
      /> */ 

class App extends Component {
  render() {
    return (
    <div className="App" >
    <Pokedex />
     
    
    </div>
    );
  }
}

export default App;
