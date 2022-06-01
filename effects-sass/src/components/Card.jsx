import axios from "axios";
import { useEffect, useState } from "react";

const pokemon = 'groudon'

const getPokemon = () => {
    try {
        const result = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const { name, id, sprites} = result.data
        return {
            id,
            name,
            sprite: sprites.front_default
        }
    } catch (error) {
        console.log('error ', error.message)
        return null
    }
   
}


export default function Card() {
    const [pokemon, setPokemon] = useState()
    /// useEffect no puede ser async asi que hay que crear la cuncion async dentro
    useEffect(() => {
            const asyncFn = async () =>{
                const result = await getPokemon()
                setPokemon(result)
            }
        
            asyncFn()
       
     },[]) //[] ejecuta una vez

     useEffect(()=>{
         if(pokemon){
             console.log('Pokemon search', pokemon)
         }
     })

    return(
        <section className="card-container">
            <section className="card-container__card">
                <h3 className="card-container__title">{result.id}</h3>
                <img className="card-container__image" src="" alt="image" />
            </section>
          
        </section>
    )
}