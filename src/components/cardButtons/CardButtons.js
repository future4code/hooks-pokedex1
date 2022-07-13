import { useNavigate } from "react-router-dom";
import { goToPokemonDetailsScreen } from "../../routes/coordinator";
import { ButtonsContainer } from "./styleCardButtons";

const CardButtons = (props) => {
    const navigate = useNavigate()
    
    return (
        <ButtonsContainer>
            <button>{props.buttonName}</button>
            <button onClick={() => goToPokemonDetailsScreen(navigate)} >Ver detalhes</button>
        </ButtonsContainer>
    );
};

export default CardButtons;