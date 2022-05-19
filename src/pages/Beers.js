import {useContext} from "react"
import Card from "../components/Card"
import {Context} from "../Context"

function Beers() {
    const {beers, loading, error} = useContext(Context)
    if (loading) return (<div className="wait"><p>loading...</p></div>)
    if (error) return (<div className="wait"><p>error...</p></div>)
    return (
        <div className="beers">
            {beers.map(beer => <Card key={beer.id}beer={beer}/>)}
        </div>
    )
}

export default Beers