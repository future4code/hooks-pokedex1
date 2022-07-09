export const goToPokemonListScreen = (navigate) =>{
    navigate('/')
}

export const goToPokedexScreen = (navigate) =>{
    navigate('/pokedex')
}

export const goToPokemonDetailsScreen = (navigate, id) =>{
    navigate(`/details/${id}`)
}