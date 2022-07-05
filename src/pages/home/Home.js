import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
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
    // const [openPokebola, setOpenPokebola] = useState(false)
    const {pokemonList} = useContext(GlobalStateContext)

    const renderPokemonList = pokemonList.map(pokemon => {
        return <PokemonCard key={pokemon.url} url={pokemon.url} />
    })

    return (
        <Container>
            <Header title='Lista de POKÉMONS' imgIcon={pokebolaIcon} goToScreen={goToPokedexScreen}/>
            <Body>
                {renderPokemonList}
            </Body>
        </Container>
    );
};

export default Home;