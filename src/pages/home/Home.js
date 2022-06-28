import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PokeCard from "../../components/pokeCard/PokeCard";
import { Body, Container } from "./styleHome";
import pokebolaIcon from '../../imgs/pokedex-icon.png';
import { goToPokedexScreen } from "../../routes/coordinator";

const Home = () => {
    const nameButton = 'Adicionar'
    
    return (
        <Container>
            <Header title='POKEMONS' img={pokebolaIcon} goToScreen={goToPokedexScreen}/>
            <Body>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
                <PokeCard buttonName={nameButton}/>
            </Body>
            <Footer/>
        </Container>
    );
};

export default Home;