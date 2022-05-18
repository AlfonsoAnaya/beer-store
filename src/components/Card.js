function Card ({beer: {id, image_url, name, abv, ibu, tagline, description, food_pairing, ingredients}}) {
    return(
        <div className="beer-wrapper card">
            <div className="beer">
                <img className="beer__img" src={image_url} alt={`a ${name} beer`} />
                <h3>{name}</h3>
                <span className="beer__info">
                    <span>ABV: {abv}%</span>
                    <span>IBU: {ibu}</span>
                </span>
            </div>
            <div className="beer__content">
                <div className="beer__name">{name}</div>
                <div className="beer__tagline">{tagline}</div>
                <div className="beer__description">{description}</div>
                <div className="beer__food-pairing">Pair with: {food_pairing.join(", ")}</div>
                <div className="beer_yeast">Yeast: {ingredients.yeast}</div>
            </div>
        </div>

    )
}

export default Card
