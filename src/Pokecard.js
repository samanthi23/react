import React, { Component } from 'react';
import './Pokecard.css';

//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// add a 00 before to make it a 3 digit number
// if number is greater than 999 then don't pad the number just return number
// Pokegame Component determines which one wins with the two cards, Pokegame.js
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
        
        <div className="Pokecard">
            <h1 className="Pokecard-title">
                {this.props.name}
            </h1>
            <img src ={imgSrc} alt={this.props.name} />
            <div className="Pokecard-data">
                Type: {this.props.type}
            </div>
            <div className="Pokecard-data">
                EXP: {this.props.exp}
            </div>
        
        </div>
        
        )
    }
}

export default Pokecard;