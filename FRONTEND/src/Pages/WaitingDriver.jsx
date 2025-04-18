import React, { useContext, useEffect, useRef, useState } from 'react'
import WaitingForDriver from '../components/WaitingForDriver';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { UserDataContext } from "../context/Usercontext";
import { Socketcontext } from "../context/Socketcontext";
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/Captaincontext';


const WaitingDriver = () => {
  const navigate = useNavigate()
  const { confirmcaptain, setConfirmcaptain } = useContext(CaptainDataContext);
  const {socket,sendMessage,receiveMessage} = useContext(Socketcontext)
  const { ridedata,setRidedata,setRidestart} = useContext(UserDataContext);
  const [open, setOpen] = useState(true)
  const openref = useRef(null);

  useGSAP(() => {
    if (open) {
      gsap.to(openref.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(openref.current, {
        transform: "translateY(90%)",
      });
    }
  }, [open]);

   socket.on("ride-started", (ride) => {
     console.log("Ride started event triggered:", ride); 
     setRidestart(ride);
     setTimeout(() => navigate("/ride"), 500);
   });

  
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img
        className="h-full w-full object-cover  "
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
      />
      <div
        ref={openref}
        className="fixed w-full z-10 bottom-0  bg-white px-2 py-4 pt-6"
      >
        <WaitingForDriver
        ridedata={ridedata} 
        setOpen={setOpen} />
      </div>
    </div>
  );
}

export default WaitingDriver