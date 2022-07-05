import Header from "../../components/header/Header";
import PokeCard from "../../components/pokeCard/PokeCard";
import { Body, Container } from "./styleHome";
import pokebolaIcon from '../../imgs/pokedex-icon.png';
import { goToPokedexScreen } from "../../routes/coordinator";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_url } from '../../constants/index'
import pokebolaClosed from '../../imgs/pokebola-closed.png';
import pokebolaOpened from '../../imgs/pokebola-opened.png';
import { useState } from "react";

const Home = () => {
    const nameButton= "Adicionar"
    const [openPokebola, setOpenPokebola] = useState(false)
    const pokemonList = useRequestData(`${BASE_url}pokemon`)
    
    //pokemonList && pokemonList.results
    // console.log(pokemonList?.results)

    const renderPokemon = pokemonList?.results.map(pokemon => {
        return <PokeCard key={pokemon.url} buttonName={nameButton} pokemon={pokemon} />
    })


    return (
        <Container>
            <Header title='Lista de POKÉMONS' imgIcon={pokebolaIcon} goToScreen={goToPokedexScreen}/>
            <Body>
                {/* {!openPokebola 
                ? <img onClick={() => setOpenPokebola(true)} src={pokebolaClosed} alt='' />
                : <img onClick={() => setOpenPokebola(false)} src={pokebolaOpened} alt='' />} */}
                {renderPokemon}
            </Body>
        </Container>
    );
};

export default Home;