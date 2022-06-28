import { useNavigate } from "react-router-dom";
import { Button, Container } from "./styleHeader";

const Header = (props) => {
    const navigate = useNavigate()

    return (
        <Container>
            <h1>{props.title}</h1>
            <Button onClick={() => props.goToScreen(navigate)} ><img src={props.img} alt='pokebola'/></Button>
        </Container>
    );
};

export default Header;