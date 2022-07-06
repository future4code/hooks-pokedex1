import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { Body, Container, Pages, BodyGrid } from "./styleHome";
import pokebolaIcon from '../../imgs/pokedex-icon.png';
import { goToPokedexScreen } from "../../routes/coordinator";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
    // const [openPokebola, setOpenPokebola] = useState(false)
    const { pokemonList, inputSearch } = useContext(GlobalStateContext)

    const renderPokemonList = pokemonList
    .filter(pokemon => {
        return pokemon.name.toLowerCase().includes(inputSearch)
    })
    .map(pokemon => {
        return <PokemonCard key={pokemon.url} url={pokemon.url} />
    })

    return (
        <Container>
            <Header title='Lista de POKÉMONS'
                imgIcon={pokebolaIcon} goToScreen={goToPokedexScreen} />
            <Body>
                <SearchBar />
                <BodyGrid>
                {renderPokemonList}
                </BodyGrid>
            </Body>
        </Container>
    );
};

export default Home;