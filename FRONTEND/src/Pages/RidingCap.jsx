import React, { useContext } from 'react'
import { UserDataContext } from '../context/Usercontext';
import { Link } from 'react-router-dom';

const RidingCap = () => {
    
    const {ridestart}=useContext(UserDataContext)
  return (
    <div className="h-screen flex flex-col w-screen  gap-3">
      <img
        className="h-full w-full object-cover  "
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
      />
      <div className="fixed w-full  justify-center items-center gap-3  z-10 bottom-0 flex flex-col bg-yellow-400 rounded-t-xl px-3 py-10 pt-14">
        <h3 className="text-lg font-semibold">4KM Away</h3>
        <Link
          to={"/finishcap"}
          className="bg-green-600 w-[90%] flex items-center justify-center text-white rounded-xl h-10 "
        >
          <button>Complete Ride</button>
        </Link>
      </div>
    </div>
  );
}

export default RidingCap