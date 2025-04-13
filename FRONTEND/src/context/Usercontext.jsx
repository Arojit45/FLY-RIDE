import React, { createContext, use, useState } from "react";

export const UserDataContext = createContext();

const Usercontext = ({ children }) => {
  const [fares, setFares] = useState({ car: 0, bike: 0, auto: 0 });
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  

  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser,fares,setFares }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default Usercontext;
