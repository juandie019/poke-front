import { useEffect, useState } from 'react';
import { getPokemons, getPokemon } from '../services/pokemonService'
import { PokemonDrawer } from '../components/PokemonDrawer'
import { PokemonCard } from '../components/PokemonCard';

export const HomePage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [chosenPokemon, setChosenPokemon] = useState(null);

    const [pagintation, setPagination] = useState({ page: 0, next: false, previous: false });
    
    const [loadingPokemons, setLoadingPokemons] = useState(false);
    const [changePage, setChangePage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPokemons = async (page) => {
        setLoadingPokemons(true);
        
        const pokemonsData = await getPokemons(page, searchTerm);
        setPokemons(pokemonsData.pokemons);
        setPagination(pokemonsData.pagination); 

        setLoadingPokemons(false);
    }

    const fetchPokemon = async (nameOrId) => {
        const pokemon = await getPokemon(nameOrId);
        setChosenPokemon(pokemon);
    }

    const downloadPokemon = async () => {
        console.log('dowload');
    }

    useEffect(() => {
        fetchPokemons(changePage);
    }, [changePage, searchTerm])

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
                <div>
                    <input className='margin-md padding' placeholder='Search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                    {
                        chosenPokemon && <PokemonCard pokemon={chosenPokemon} onCatchPokemon={downloadPokemon}/> 
                    }
                </div>
            </div>
        </>
    )
}