import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext(); 

// High-order component to wrap the app and provides data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            { children }
        </StateContext.Provider>
    );
};

export const useStateValue = () => {
    return useContext(StateContext);
};