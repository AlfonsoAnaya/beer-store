import React, {useState} from "react"

const Context = React.createContext() 

function ContextProvider({children}) {
    let [page, setPage] = useState(1)

    function incrementPage() {
        setPage(page+1)
    }

    function decrementPage() {
        setPage(page-1)
        console.log(page)
    }

    return (
        <Context.Provider value={{
            incrementPage,
            decrementPage,
            page
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}