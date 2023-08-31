
import { createContext, useContext } from "react";


const AppContext=createContext()

const AppProvider=({children})=>{
    return <AppContext.Provider value="store">
        {children}
    </AppContext.Provider>
}

//custom hooks

const useProductContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductContext}

