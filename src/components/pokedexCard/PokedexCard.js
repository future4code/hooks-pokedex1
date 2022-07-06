import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPokemonDetailsScreen } from "../../routes/coordinator";
import { Container, ButtonsContainer } from './stylePokedexCard';

const PokedexCard = (props) => {
    const navigate = useNavigate()
    const pokemon = useRequestData(props.url)

    const { removePokemon } = useContext(GlobalStateContext)
    // console.log(pokemon)
    return (
        <Container>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <p>{pokemon?.name}</p>
            <ButtonsContainer >
                <button onClick={() => removePokemon(props.url)} >Remover</button>
                <button onClick={() => goToPokemonDetailsScreen(navigate, pokemon.id)} >Ver detalhes</button>
            </ButtonsContainer>
        </Container>
    );
};

export default PokedexCard;