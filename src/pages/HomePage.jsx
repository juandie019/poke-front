import { usePokemonsFetch } from '../hooks/usePokemonsFetch';
import { usePokemonFetch } from '../hooks/usePokemonFetch';

import { getPokemonPdf } from '../services/pokemonService'

import { PokemonDrawer } from '../components/PokemonDrawer'
import { PokemonCard } from '../components/PokemonCard';

export const HomePage = () => {
    const {
        pokemons,
        pagintation,
        loadingPokemons,
        searchTerm,
        pokemonsError,
        setChangePage,
        setSearchTerm,
    } = usePokemonsFetch();

    const  {
        chosenPokemon,
        fetchPokemon,
        loadingPokemon,
        pokemonError
    } = usePokemonFetch()

    const downloadPokemon = async () => {
        await getPokemonPdf(chosenPokemon.id, chosenPokemon.name);
    }

    return (
        <>
            <div className="row">
                {/* left side */}
                <PokemonDrawer 
                    pokemons={pokemons} 
                    loading={loadingPokemons}
                    nextDisabled={!pagintation.next || loadingPokemons}
                    prevDisabled={!pagintation.previous || loadingPokemons}
                    onNext={() => setChangePage(pagintation.page + 1)}
                    onPrev={() => setChangePage(pagintation.page - 1)}
                    onPokemonClick={fetchPokemon}
                />

                {/* right side */}
                <div className='margin-md'>
                    <input className='padding' placeholder='Search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                    {
                        chosenPokemon && <PokemonCard pokemon={chosenPokemon} onCatchPokemon={downloadPokemon}/> 
                    }
                    {
                        loadingPokemon && <div>Cargando pokemon...</div>  
                    }
                    {
                        (pokemonError || pokemonsError) && <div className='error-card my-md'>Sucedio un error al cargar la información</div>
                    }
                </div>
            </div>
        </>
    )
}