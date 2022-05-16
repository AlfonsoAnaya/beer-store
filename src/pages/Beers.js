import React, {useState, useEffect, useContext} from "react"
import Card from "../components/Card"
import {Context} from "../Context"

const urlBase = "https://api.punkapi.com/v2/beers?page=";

function Beers() {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {page} = useContext(Context)

    useEffect(() => {
        
        let url = urlBase + page
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            }) 
            .then(data => setBeers(data))
            .catch(error => {
                console.log("Error fetching data")
                setError(true)
            })
            .finally(
                setLoading(false)
            )
        }, [page]
    )
    if (loading) return (<div className="wait"><p>loading...</p></div>)
    if (error) return (<div className="wait"><p>error...</p></div>)
    return (
        <div className="beers">
            {beers.map(beer => <Card key={beer.id }beer={beer}/>)}
        </div>
    )
}


export default Beers