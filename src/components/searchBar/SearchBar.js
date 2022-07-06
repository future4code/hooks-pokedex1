import { Container, ButtonsContainer, InputContainer, SelectContainer } from "./styleSearchBar";
import leftIcon from '../../imgs/left-icon.png';
import rightIcon from '../../imgs/right-icon.png';
import searchIcon from '../../imgs/search-icon.png'
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { BASE_url } from "../../constants";


const SearchBar = () => {
    const { offset, goToNextPage, goToPrevioustPage,
        inputSearch, onChangeSearch, 
        inputSelect, onChangeSelect } = useContext(GlobalStateContext)


    return (
        <Container>
            <InputContainer>
                <input type='text' placeholder="Pesquise.."
                    value={inputSearch} onChange={(ev) => onChangeSearch(ev)} />
                    <button><img src={searchIcon} /></button>
            </InputContainer>
            <SelectContainer value={inputSelect} onChange={(ev) => onChangeSelect(ev)} >
                <option value='' >Filtrar por</option>

            </SelectContainer>
            <ButtonsContainer>
                {offset !== 0 && <button onClick={() => goToPrevioustPage()} >
                    <img src={leftIcon} /></button>}
                <p>{offset / 20 + 1}</p>
                {offset !== 1140 && <button onClick={() => goToNextPage()} >
                    <img src={rightIcon} /></button>}
            </ButtonsContainer>
        </Container>
    );
};

export default SearchBar;