import React, { createContext, useEffect } from "react";
import { io } from "socket.io-client";

export const Socketcontext = createContext();
const socket = io(`${import.meta.env.VITE_BASE_URL}`);

const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }, []);


  return (
    <Socketcontext.Provider value={{ socket }}>
      {children} 
    </Socketcontext.Provider>
  );
};

export default SocketProvider;
