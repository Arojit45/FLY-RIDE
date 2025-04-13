import React, { useContext, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/Usercontext";


const Home = () => {
  const { setFares, setPickuplocation, setDestinationlocation } = useContext(UserDataContext);
  const navigation = useNavigate()
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelopen, setPanelopen] = useState(false);
  const panelref = useRef(null);
  const panelcloseref = useRef(null);
  const [pickupSuggestion, setPickupSuggestion] = useState([]);
  const [destinationSuggestion, setDestinationSuggestion] = useState([]);
  const [activeField, setActiveField] = useState(null);


  const hadlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestion(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const hadleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestion(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const submithandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted");
  };
  const firstithandler = (e) => {
    e.preventDefault();
  };
  useGSAP(() => {
    if (panelopen) {
      gsap.to(panelref.current, {
        height: "70%",
        padding: 20,
      });
      gsap.to(panelcloseref.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelref.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelcloseref.current, {
        opacity: 0,
      });
    }
  }, [panelopen]);
 

//send to context API
  setPickuplocation(pickup)
  setDestinationlocation(destination)
  
  async function  FindTrip (){
    if(pickup && destination){
      setPanelopen(false)
      navigation("/BookingPage");
    }
    else{
      alert('All fields are required')
    }
    try {
    setPanelopen(false);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data)
    setFares({
      car: response.data.car,
      bike: response.data.bike,
      auto: response.data.auto,
    });
    navigation("/BookingPage");
  } catch (error) {
    console.error("Error fetching fares:", error);
    alert("Something went wrong while fetching fares.");
  }  
    
  }

  
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        className="w-20 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
          <div className="h-[30%] p-5 bg-white relative">
            <h5
              ref={panelcloseref}
              onClick={() => {
                setPanelopen(false);
              }}
              className=" absolute opacity-0 top-6 text-2xl right-6"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form
              onSubmit={(e) => {
                submithandler(e);
              }}
            >
              <div className="line absolute h-16 w-1 top-[40%] left-10 rounded-full bg-gray-900"></div>
              <input
                onClick={() => {
                  setPanelopen(true);
                  setActiveField("pickup");
                }}
                value={pickup}
                onChange={(e) => {
                  hadlePickupChange(e);
                }}
                className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
                type="text"
                placeholder="Add a Pick-up Location"
              />
              <input
                onClick={() => {
                  setPanelopen(true);
                  setActiveField("destination");
                }}
                value={destination}
                onChange={(e) => {
                  hadleDestinationChange(e);
                }}
                className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter your Destination"
              />
            </form>
            <div onClick={FindTrip} className="mt-2   w-full flex justify-end">
              <button className="bg-black h-10 w-96 flex items-center justify-center text-white rounded-xl ">
                Find Trip
              </button>
            </div>
          </div>
          <div ref={panelref} className="h-0 bg-white ">
            <LocationSearchPanel
              suggestion={
                activeField === "pickup"
                  ? pickupSuggestion
                  : destinationSuggestion
              }
              setPanelopen={setPanelopen}
              setPickup={setPickup}
              setDestination={setDestination}
              setActiveField={setActiveField}
              activeField={activeField}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
