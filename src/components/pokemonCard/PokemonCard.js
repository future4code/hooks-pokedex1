import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPokemonDetailsScreen } from "../../routes/coordinator";
import { Container, ButtonsContainer } from "./stylePokemonCard";

const PokemonCard = (props) => {
    const navigate = useNavigate()
    const pokemon = useRequestData(props.url)

    const { addPokemon } = useContext(GlobalStateContext)

    return (
        <Container>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <p>{pokemon?.name}</p>
            <ButtonsContainer >
                <button onClick={() => addPokemon(props.url)} >Adicionar</button>
                <button onClick={() => goToPokemonDetailsScreen(navigate, pokemon.id)} >Ver detalhes</button>
            </ButtonsContainer>
        </Container>
    );
};

export default PokemonCard;