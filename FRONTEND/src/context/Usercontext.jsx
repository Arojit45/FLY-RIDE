import React, { createContext, use, useState } from "react";

export const UserDataContext = createContext();

const Usercontext = ({ children }) => {
  const [fares, setFares] = useState({ car: 0, bike: 0, auto: 0 });
  const [pickuplocation,setPickuplocation] = useState()
  const [destinationlocation, setDestinationlocation] = useState();
  const [user, setUser] = useState(null);
  const [ridedata,setRidedata] = useState(null)
  const [ridestart,setRidestart] = useState(null)

  return (
    <div>
      <UserDataContext.Provider
        value={{
          user,
          setUser,
          fares,
          ridedata,
          setFares,
          setDestinationlocation,
          setPickuplocation,
          pickuplocation,
          destinationlocation,
          setRidedata,
          ridestart,
          setRidestart
        }}
      >
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default Usercontext;
