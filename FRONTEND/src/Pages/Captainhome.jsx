import React, { useContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Socketcontext } from "../context/Socketcontext";
import { CaptainDataContext } from "../context/Captaincontext";

const Captainhome = () => {
  const [ridepopup, setRidepopup] = useState(false);
  const ridepopupref = useRef(null);
  const { socket } = useContext(Socketcontext);
  const { captain, confirmcaptain, setConfirmcaptain } =
    useContext(CaptainDataContext);
  const [ride, setRide] = useState(null);

  useEffect(() => {
    socket.emit("join", { userId: captain._id, userType: "captain" });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log({
              userId: captain._id,
              location: {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              },
            });

            socket.emit("update-location-captain", {
              userId: captain._id,
              location: {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              },
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    return () => clearInterval(locationInterval); // Clear interval on component unmount
  }, [socket, captain]);

  socket.on("new-ride", (data) => {
    console.log(data);
    setRide(data);
    setRidepopup(true);
  });

  useGSAP(() => {
    if (ridepopup) {
      gsap.to(ridepopupref.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(ridepopupref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridepopup]);

 async function confirmRide() {
   try {
     const response = await axios.post(
       `${import.meta.env.VITE_BASE_URL}/rides/confirmride`,
       {
         rideId: ride._id, // Only need rideId in body
       },
       {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
       }
     );
     console.log(response.data)
     setConfirmcaptain(response.data)
     console.log("Updated confirmcaptain:", response.data);
     

   } catch (error) {
     console.error("Error:", error.response?.data || error.message);
   }
 }

  return (
    <div className="h-screen relative w-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link
          to="/CapatainLogin"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i class="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-full">
        <img
          className="h-full w-full object-cover  "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className=" ">
        <CaptainDetails />
      </div>
      <div
        ref={ridepopupref}
        className="fixed rounded-t-lg w-full translate-y-full z-10 bottom-0  bg-white px-3 py-3 "
      >
        <RidePopup ride={ride} 
        confirmRide={confirmRide}
         setRidepopup={setRidepopup} />
      </div>
    </div>
  );
};

export default Captainhome;
