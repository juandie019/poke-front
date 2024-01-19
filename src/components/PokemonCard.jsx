export const PokemonCard = ({ pokemon, onCatchPokemon }) => {
    return (
        <>
            <div className="card padding-md margin-md">
                <div>

                <img src={pokemon.image} width="200" height="200" />

                {
                    pokemon.spriteList.map((s, index) => <img className="img-animation" key={index} src={s} width="60" height="60"/>)
                }
                </div>
                <div className="row items-center row-wrap">
                    <h1>{ pokemon.name }</h1>
                    <div className="row items-center">
                        <small>{pokemon.weight / 10} kg</small>
                        <div>|</div>
                        <small>{pokemon.height / 10} mts</small>
                    </div>
                </div>

                <div>
                    <h2>Abilities</h2>
                    <div className="row">
                        {
                            pokemon.abilities.map((a, index) => <div className="pill" key={index}>{ a }</div>)
                        }
                    </div>
                </div>
                <button className="secondary-button w-100 ma-0 mt-10" onClick={onCatchPokemon}>Catch this pokemon</button>
            </div>
        </>
    )
}