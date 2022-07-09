import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_url } from '../constants';
import GlobalStateContext from "./GlobalStateContext";


export const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedex, setPokedex] = useState([])
    // const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem("pokedex")) && JSON.parse(localStorage.getItem("pokedex")) )
    //inicializa a pokedex com o que tiver no localStorage

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)

    const [inputSearch, setInputSearch] = useState('')
    const [inputSelect, setInputSelect] = useState('')
    // const [type, setType] = useState([])

    const [checkHeader, setCheckHeader] = useState(false)
    const [idDetails, setIdDetails] = useState(0)
    
    useEffect(() =>{
        savePokedex()
        getPokedex()
    }, [])

    useEffect(() => {
        getPokemonList()
        savePokedex()
    }, [pokedex, offset])


    const getPokemonList = async () => {
        await axios.get(`${BASE_url}/pokemon?offset=${offset}&limit=${limit}`)
            .then(res => {
                getPokemonListChecked(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getPokemonListChecked = (list) => { //list => name e url
        const updatePokemonList = list.filter(pokemon => {
            const find = pokedex?.find(url => { //verifica se achou o pokemon na pokedex
                if (pokemon.url === url) {
                    return true
                }
            })
            if (!find) { //se nao achou na pokedex
                return pokemon
            }
        })
        setPokemonList(updatePokemonList)
    }

    const savePokedex = () => {
        const pokedexFinalList = [...pokedex]
        localStorage.setItem("pokedex", JSON.stringify(pokedexFinalList))
    }

    const getPokedex = () => {
        const pokedexList = localStorage.getItem("pokedex")
        const pokedexFinalList = JSON.parse(pokedexList)
        setPokedex(pokedexFinalList)
    }

    const addPokemon = (url) => {
        const newPokedex = [...pokedex, url]
        setPokedex(newPokedex)
    }

    const removePokemon = (urlPokemon) => {
        const newPokedex = [...pokedex]
        const index = newPokedex.findIndex((url, index) => {
            if (url === urlPokemon) {
                return index
            }
        })
        newPokedex.splice(index, 1)
        setPokedex(newPokedex)
    }

    const goToNextPage = () => {
        setOffset(offset + 20)
        getPokemonList()
        if(offset===1140){
            setLimit(14)
        } else{
            setLimit(20)
        }
    }

    const goToPrevioustPage = () => {
            setOffset(offset - 20)
            getPokemonList()
    }


    const onChangeSearch = (ev) => {
        setInputSearch(ev.target.value)
    }

    const onChangeSelect = (ev) => {
        setInputSelect(ev.target.value)
    }
    

    const checkPokedex = () => {
        const find = pokedex?.find(url => { //verifica se achou o pokemon na pokedex
            if (`${BASE_url}/pokemon/${idDetails}` === url) {
                return true
            } else {
                return false
            }
        })
        setCheckHeader(find)

    }

    return <GlobalStateContext.Provider
        value={{
            pokemonList, pokedex, addPokemon, removePokemon,
            offset, goToNextPage, goToPrevioustPage, 
            inputSearch, onChangeSearch, inputSelect, 
            onChangeSelect, checkPokedex, checkHeader,
            setIdDetails
        }}>
        {props.children}
    </GlobalStateContext.Provider>
}