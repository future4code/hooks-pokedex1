import CardButtons from "../cardButtons/CardButtons";
import { Container } from "./stylePokeCard";

const PokeCard = (props) => {
    return (
        <Container>
            <img src={'https://picsum.photos/seed/picsum/150/150'} alt='foto aleatória' />
            <p>Pokemon</p>
            <CardButtons buttonName={props.buttonName} />
        </Container>
    );
};

export default PokeCard;