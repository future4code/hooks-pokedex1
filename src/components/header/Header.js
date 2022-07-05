import { useNavigate } from "react-router-dom";
import { AddButton, Button, Container } from "./styleHeader";
import imgAddButton from '../../imgs/pokebola-icon.png'

const Header = (props) => {
    const navigate = useNavigate()

    return (
        <Container>
            <h1>{props.title}</h1>
            {!props.addOrRemove
                ? <Button onClick={() => props.goToScreen(navigate)} >
                    <img src={props.imgIcon} alt='pokebola' /></Button>
                : <>
                    <Button onClick={() => props.goToScreen(navigate)} >
                        <img src={props.imgIcon} alt='pokebola' /></Button>
                    <AddButton onClick={() => props.addOrRemove(navigate)} >
                        <img src={imgAddButton} alt='pokebola' /></AddButton>
                </>
            }
        </Container>
    );
};

export default Header;