import Header from "../../components/header/Header";
import PokeCard from "../../components/pokeCard/PokeCard";
import { Body, Container } from "./styleHome";
import pokebolaIcon from '../../imgs/pokedex-icon.png';
import { goToPokedexScreen } from "../../routes/coordinator";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_url } from '../../constants/index'
import pokebolaClosed from '../../imgs/pokebola-closed.png';
import pokebolaOpened from '../../imgs/pokebola-opened.png';
import { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const Home = () => {
    const nameButton= "Adicionar"
    // const [openPokebola, setOpenPokebola] = useState(false)
    const {pokemonList} = useContext(GlobalStateContext)
    
    //pokemonList && pokemonList.results
    // console.log(pokemonList?.results)

    const renderPokemon = pokemonList.map(pokemon => {
        return <PokeCard key={pokemon.url} buttonName={nameButton} url={pokemon.url} />
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