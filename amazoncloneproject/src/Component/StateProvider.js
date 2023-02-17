import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer(can every component(childe) give prvilage to access data layer)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull and push information from the data layer
// to make the data layer usable by other childernas
export const useStateValue = () => useContext(StateContext);
