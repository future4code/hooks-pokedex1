import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_url } from "../../constants";
import { Container, DivStat, DivStats, DivTeste, ImgBack, Div } from "./stylePokemonDetails";

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        axios.get(`${BASE_url}/pokemon/39/`)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data)
            })
            .catch(err => console.log(err))
    }


    return (

        <Container>
            <h2>{pokemon.name}</h2>
            <ImgBack srcFront={pokemon.sprites?.front_default} srcBack={pokemon.sprites?.back_default} />
            <DivStats>
                {pokemon.stats?.map((stats, index) => {
                    return <DivStat key={index} >
                        <p>{stats.stat.name}</p>
                        <DivTeste><Div sizeDiv={stats.base_stat} ></Div><p>{stats.base_stat}</p></DivTeste>
                    </DivStat>
                })}
            </DivStats>
            <div>
                {pokemon.types?.map((type, index) => {
                    return <div key={index} >
                        <p>{type.type.name}</p>
                    </div>
                })}
            </div>
            <div>
                {pokemon.abilities?.map((ability, index) => {
                    return <div key={index} >
                        <p>{ability.ability.name}</p>
                    </div>
                })}
            </div>
        </Container>
    );
};

export default PokemonDetails;