import React, {useState, useEffect} from "react"

const Context = React.createContext() 

function ContextProvider({children}) {
    const [page, setPage] = useState(1)
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const urlBase = "https://api.punkapi.com/v2/beers?page=";

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
    
    
    function incrementPage() {
        setPage(page+1)
    }

    function decrementPage() {
        setPage(page-1)
    }

    return (
        <Context.Provider value={{
            incrementPage,
            decrementPage,
            beers,
            page,
            loading,
            error
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
