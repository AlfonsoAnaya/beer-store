import React from "react"

const Card = ({beer: {image_url, name, tagline, description}}) => {
    return(
        <div className="beer">
        <img className="beer__img" src={image_url} alt={`a ${name} beer`}/>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{description}</p>
        </div>
    )
}

export default Card