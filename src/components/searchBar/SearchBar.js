import { Container, ButtonsContainer, InputContainer, SelectContainer } from "./styleSearchBar";
import leftIcon from '../../imgs/left-icon.png';
import rightIcon from '../../imgs/right-icon.png';
// import searchIcon from '../../imgs/search-icon.png';
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";


const SearchBar = () => {
    const { offset, goToNextPage, goToPrevioustPage,
        inputSearch, onChangeSearch, 
        inputSelect, onChangeSelect } = useContext(GlobalStateContext)


    return (
        <Container>
            <InputContainer>
                <input type='text' placeholder="Pesquise.."
                    value={inputSearch} onChange={(ev) => onChangeSearch(ev)} />
                    {/* <button><img src={searchIcon} alt='search' /></button> */}
            </InputContainer>
            <SelectContainer value={inputSelect} onChange={(ev) => onChangeSelect(ev)} >
                <option value='' >Filtrar por</option>
            </SelectContainer>
            <ButtonsContainer>
                {offset !== 0 && <button onClick={() => goToPrevioustPage()} >
                    <img src={leftIcon} alt='Seta para esquerda' /></button>}
                <p>{offset / 20 + 1}</p>
                {offset !== 1140 && <button onClick={() => goToNextPage()} >
                    <img src={rightIcon} alt='Seta para a direita' /></button>}
            </ButtonsContainer>
        </Container>
    );
};

export default SearchBar;