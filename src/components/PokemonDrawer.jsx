import { PokemonLink } from "./PokemonLink";

export const PokemonDrawer = ({ pokemons = [], loading = false, onNext, onPrev, nextDisabled, prevDisabled, onPokemonClick }) => {
    return (
        <>
            <nav className="drawer">
                <div className="row space-between">
                    <button className="main-button" disabled={prevDisabled}  onClick={onPrev}>Prev</button>
                    <button className="main-button" disabled={nextDisabled}  onClick={onNext}>Next</button>
                </div>
                <ul>
                    { 
                        !loading ?
                        pokemons.map(({ name, image, id }) => <li key={id} onClick={() => onPokemonClick(id)} ><PokemonLink name={name} image={image} id={id}/></li>) :
                        <p className="padding">Loading...</p>
                    }
                </ul>
            </nav>
        </>
    )
}