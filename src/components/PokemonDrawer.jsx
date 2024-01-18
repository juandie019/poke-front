import { PokemonLink } from "./PokemonLink";
export const PokemonDrawer = ({ pokemons = [] }) => {
    return (
        <>
            <nav className="drawer">
                <ul>
                    {
                        pokemons.map(({ name, image, id }) => <li  key={id}><PokemonLink name={name} image={image} id={id}/></li>)
                    }
                </ul>
            </nav>
        </>
    )
}