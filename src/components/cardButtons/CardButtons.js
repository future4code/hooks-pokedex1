import { ButtonsContainer } from "./styleCardButtons";

const CardButtons = (props) => {
    return (
        <ButtonsContainer>
            <button>{props.buttonName}</button>
            <button>Ver detalhes</button>
        </ButtonsContainer>
    );
};

export default CardButtons;