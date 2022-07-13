import { useContext } from "react";
import Header from "../../components/header/Header";
import { BASE_url } from "../../constants";
import { goToPokemonListScreen } from "../../routes/coordinator";
import { Container, DivStat, DivStats, DivTeste, ImgBack, Div, Body, DivTypes, DivAbilities, Div2 } from "./stylePokemonDetails";
import pokemonIcon from '../../imgs/pokemon-icon.png';
import pokebolaClosed from '../../imgs/pokebola-closed.png';
import pokebolaOpened from '../../imgs/pokebola-opened.png';
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import GlobalStateContext from "../../global/GlobalStateContext";


const PokemonDetails = () => {
    // const [openPokebola, setOpenPokebola] = useState(false)

    const { id } = useParams()
    //const pathParams = useParamas()
    //pathParams.id

    const pokemon = useRequestData(`${BASE_url}/pokemon/${id}`)

    const { addPokemon, removePokemon, checkHeader, setIdDetails } = useContext(GlobalStateContext)

    setIdDetails(id)

    return (
        <Container>
            {checkHeader
                ? <Header title={pokemon?.name} imgIcon={pokemonIcon}
                    goToScreen={goToPokemonListScreen} name="Remover"
                    chooseFunction={removePokemon} />
                : <Header title={pokemon?.name} imgIcon={pokemonIcon}
                    goToScreen={goToPokemonListScreen} name="Adicionar"
                    chooseFunction={addPokemon} />
            }

            <Body>
                {/* {!openPokebola 
                ? <img onClick={() => setOpenPokebola(true)} src={pokebolaClosed} alt='' />
                : <img onClick={() => setOpenPokebola(false)} src={pokebolaOpened} alt='' />
            } */}

                <ImgBack srcFront={pokemon?.sprites.front_default} srcBack={pokemon?.sprites.back_default} />

                <DivStats>
                    <h2>Poderes</h2>
                    {pokemon?.stats.map((stats, index) => {
                        return <DivStat key={index} >
                            <p>{stats.stat.name}</p>
                            <DivTeste><Div sizeDiv={stats.base_stat} ></Div><p>{stats.base_stat}</p></DivTeste>
                        </DivStat>
                    })}
                </DivStats>
                <Div2>
                    <DivTypes>
                        <h2>Tipos</h2>
                        {pokemon?.types.map((type, index) => {
                            return <div key={index} >
                                <p>{type.type.name}</p>
                            </div>
                        })}
                    </DivTypes>

                    <DivAbilities>
                        <h2>Principais Ataques</h2>
                        {pokemon?.abilities.map((ability, index) => {
                            return <div key={index} >
                                <p>{ability.ability.name}</p>
                            </div>
                        })}
                    </DivAbilities>
                </Div2>

            </Body>
        </Container>
    );
};

export default PokemonDetails;