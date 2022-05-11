
const urlBase = "https://api.punkapi.com/v2/beers?page=";
let beers = []
let page = 1

//get Beers from Punk Api//
async function getBeers() {
    let url = urlBase + page
    const beerPromise = await fetch(url);
    beers = await beerPromise.json();
    console.log(beers[0].tagline)
    console.log(beers[0].tagline)
}

getBeers()

const Card = ({beer: {name, tagline, description}}) => {
    return(
        <div>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{description}</p>
        </div>
    )
}

function Beers() {
    return (
        <div className="beers">
            {beers.map(beer => <Card beer={beer}/>)}
        </div>
    )
}

export default Beers