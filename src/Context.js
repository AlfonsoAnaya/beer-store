import React, {useState, useEffect} from "react"

const Context = React.createContext() 

function ContextProvider({children}) {
    const [beers, setBeers] = useState([])
    const [page, setPage] = useState(1)
    const [ABV, setABV] = useState("")
    const [IBU, setIBU] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const urlBase = "https://api.punkapi.com/v2/beers?page=";

    function handleABVChange(event) {
        setPage(1)
        let value = event.target.value
        if(value === "all") setABV("")
        if(value === "weak") setABV("&abv_lt=4.6")
        if(value === "medium") setABV("&abv_gt=4.5&abv_lt=7.6")
        if(value === "strong") setABV("&abv_gt=7.5")
    }

    function handleIBUChange(event) {
        setPage(1)
        let value = event.target.value
        if(value === "all") setIBU("")
        if(value === "weak") setIBU("&ibu_lt=35")
        if(value === "medium") setIBU("&ibu_gt=34&ibu_lt=75")
        if(value === "strong") setIBU("&ibu_gt=74")
    }
    
    useEffect(() => {
        let url = urlBase + page + ABV + IBU
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
        }, [page, ABV, IBU]
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
            handleABVChange,
            handleIBUChange,
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
