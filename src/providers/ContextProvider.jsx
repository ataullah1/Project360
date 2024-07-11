"use client";

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUserData(decoded);
      } catch (error) {
        console.error("Failed to decode token:", error);
        setUserData({});
      }
    } else {
      console.log("Token Can't Access:");
      setUserData({});
    }
  }, [token]);

  return (
    <ContextData.Provider value={{ userData }}>{children}</ContextData.Provider>
  );
};

export const useContextData = () => useContext(ContextData);
