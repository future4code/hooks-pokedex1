import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Pokedex from "../pages/pokedex/Pokedex";
import PokemonDetails from "../pages/pokemonDetails/PokemonDetails";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/details" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;