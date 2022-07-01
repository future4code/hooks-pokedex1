import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPokemonDetailsScreen } from "../../routes/coordinator";
import { Container, ButtonsContainer } from "./stylePokeCard";

const PokeCard = (props) => {
    const navigate = useNavigate()
    const pokemon = useRequestData(props.pokemon.url)

    // console.log(pokemon)
    return (
        <Container>
            <img src={pokemon?.sprites.front_default} alt={props.pokemon.name} />
            <p>{props.pokemon.name}</p>
            <ButtonsContainer >
                <button>Adicionar</button>
                <button onClick={() => goToPokemonDetailsScreen(navigate, pokemon.id)} >Ver detalhes</button>
            </ButtonsContainer>
        </Container>
    );
};

export default PokeCard;