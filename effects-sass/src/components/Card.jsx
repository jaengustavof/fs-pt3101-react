import axios from "axios";
import { useEffect, useState } from "react";

const POKEMON = "squirtle";

const getPokemon = async () => {
  try {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${POKEMON}`
    );
    const { name, id, sprites } = result.data;

    return {
      id,
      name,
      sprite:
        sprites.versions["generation-v"]["black-white"].animated.back_default, //sprites.front_default,
    };
  } catch (error) {
    console.info("> error: ", error.message);
    return null;
  }
};

export default function Card() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const asyncFn = async () => {
      const result = await getPokemon();
      setPokemon(result);
    };

    asyncFn();
  }, []);

  useEffect(() => {
    if (pokemon) {
      console.info("> pokemon searched: ", pokemon.name);
    }
  }, [pokemon]);

  return (
    <section className="card-container">
      {pokemon && (
        <section className="card-container__card">
          <h3 className="card-container__title">
            {pokemon.name} #{pokemon.id}
          </h3>
          <img
            className="card-container__image"
            src={pokemon.sprite}
            alt="pokemon_pic"
          />
        </section>
      )}
    </section>
  );
}
