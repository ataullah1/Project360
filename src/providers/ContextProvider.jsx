"use client";

// contexts/ThemeContext.js
import { createContext, useContext } from "react";

const data = "Amar soner bangla";
const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  return (
    <ContextData.Provider value={{ data }}>{children}</ContextData.Provider>
  );
};

export const useContextData = () => useContext(ContextData);
