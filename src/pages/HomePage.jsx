import { PokemonDrawer } from '../components/PokemonDrawer'

export const HomePage = () => {
    const pokemons = [{id: 1, name: 'bulbasur', image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/63.svg'}, {id: 2, name: 'Ivy', image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/142.svg'}]

    return (
        <>
            <div className="row">
                {/* left side */}
                <PokemonDrawer pokemons={pokemons}/>

                {/* right side */}
                <p>content</p>
            </div>
        </>
    )
}