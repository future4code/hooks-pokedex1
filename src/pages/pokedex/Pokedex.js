import Header from "../../components/header/Header";
import { Body, Container } from "./stylePokedex";
import pokemonIcon from '../../imgs/pokemon-icon.png';
import { goToPokemonListScreen } from "../../routes/coordinator";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokedexCard from "../../components/pokedexCard/PokedexCard";

const Pokedex = () => {
    const {pokedex} = useContext(GlobalStateContext)

    const renderPokedex = pokedex.map(pokemonUrl => {
        return <PokedexCard key={pokemonUrl} url={pokemonUrl} />
    })
    return (
        <Container>
            <Header title='Minha POKÉDEX' imgIcon={pokemonIcon} goToScreen={goToPokemonListScreen} />
            <Body>
                {renderPokedex}
            </Body>
        </Container>
    );
};

export default Pokedex;