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
        axios.get(`${BASE_url}/pokemon?offset=20&limit=20`)
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
                    return true
                }})
            if(!find){ //se nao achou na pokedex
                return pokemon
            }
        })
        setPokemonList(updatePokemonList)
    }

    const addPokemon = (url) => {
        const newPokedex = [...pokedex, url]
        setPokedex(newPokedex)
    }


    const removePokemon = (urlPokemon) => {
        const newPokedex = [...pokedex]
        const index = newPokedex.findIndex((url, index) => {
            if(url === urlPokemon){
                return index
            }
        })
        newPokedex.splice(index, 1)
        setPokedex(newPokedex)
    }


    return <GlobalStateContext.Provider 
    value={{pokemonList, pokedex, addPokemon, removePokemon}}>
        {props.children}
    </GlobalStateContext.Provider>
}