import Header from "../../components/header/Header";
import { Body, Container } from "./stylePokedex";
import pokemonIcon from '../../imgs/pokemon-icon.png';
import PokeCard from "../../components/pokeCard/PokeCard";
import { goToPokemonListScreen } from "../../routes/coordinator";

const Pokedex = () => {
    const nameButton = 'Remover'

    return (
        <Container>
            <Header title='Minha POKÉDEX' imgIcon={pokemonIcon} goToScreen={goToPokemonListScreen} />
            <Body>
                <PokeCard buttonName={nameButton} />
                <PokeCard buttonName={nameButton} />
                <PokeCard buttonName={nameButton} />
            </Body>
        </Container>
    );
};

export default Pokedex;