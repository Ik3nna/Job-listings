import React, { useState, useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    list: []
}  
   
export const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const addTag = (e)=> {
        dispatch({ type: "ADD_TAG", payload: e.currentTarget.textContent });
    }

    const removeTag = (data) => {
        dispatch({ type: "REMOVE_TAG", payload: data });
    }

    const clearAll = ()=> {
        dispatch({ type: "CLEAR_ALL" });
    }

    return(
        <AppContext.Provider value={{
            ...state, addTag, removeTag, clearAll
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext =()=>{
    return useContext(AppContext);
}