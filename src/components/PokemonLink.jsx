export const PokemonLink = ({ name, image, id }) => {
    return (
        <>
            <div className="row items-center space-between link">
                <div>{name}</div>
                <img src={image} width="50" height="50"/>
            </div>
        </>
    )
}