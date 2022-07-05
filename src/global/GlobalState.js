import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_url } from '../constants';
import GlobalStateContext from "./GlobalStateContext";


export const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => { 
        getPokemonList()
    }, [pokedex])



    const getPokemonList = () => {
        axios.get(`${BASE_url}/pokemon?limit=20`)
      .then(res => {
        getPokemonListChecked(res.data.results)
        // console.log(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
    }


    const getPokemonListChecked = (list) => { //list => name e url
        const updatePokemonList = list?.filter(pokemon =>{

            const find = pokedex?.find(url => { //verifica se achou o pokemon na pokedex
                if(pokemon.url  === url){
                    // console.log('TEM NA POKEDEX')
                    return true
                }})
            if(!find){ //se nao achou na pokedex
                return pokemon
            }

        })
        setPokemonList(updatePokemonList)
        // console.log('updateList', updatePokemonList)
        // console.log('pokedexList', pokedex)
    }

    const addPokemon = (url) => {
        const newPokedex = [...pokedex, url]
        setPokedex(newPokedex)
        console.log('pokedex', pokedex)
    }



    return <GlobalStateContext.Provider value={{pokemonList, pokedex, addPokemon}}>
        {props.children}
    </GlobalStateContext.Provider>
}