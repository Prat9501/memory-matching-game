import React, {useState, useEffect} from 'react';
import shuffle from 'lodash.shuffle';
import './App.css';

// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

const pokemon = [
  { id: 4, name: 'charizard' },
  { id: 10, name: 'caterpie' },
  { id: 77, name: 'ponyta' },
  { id: 108, name: 'lickitung' },
  { id: 132, name: 'ditto' },
  { id: 133, name: 'eevee' },
];

const doublePokemon = shuffle([...pokemon, ...pokemon]);

export default function App() {
  const [opened, setOpened] = useState([]);

  useEffect(() => {
    if(opened.length === 2) setTimeout(() => setOpened([]), 800);
  }, [opened]);

  function flipCard(index) {
    setOpened((opened) => [...opened, index]);
  }

  return <div className="app">
    <div className="cards">
      {doublePokemon.map((pokemon, index) => {
        let isFlipped = false;
        if (opened.includes(index)) isFlipped = true;

        return (
        <PokemonCard 
          key={index} 
          index={index}
          pokemon={pokemon} 
          isFlipped={isFlipped}
          flipCard={flipCard}
          />
      )})}
    </div>
  </div>;
}

function PokemonCard({ index, pokemon, isFlipped, flipCard }) {
  return (
    <button className={`pokemon-card ${isFlipped ? 'flipped' : ''}`}
       onClick={() => flipCard(index)}>
          <div className="inner">
            <div className="front">
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} 
              alt={pokemon.name} width="100" />
            </div>
            <div className="back">
              ?
            </div>
          </div>
        </button>
  )
}