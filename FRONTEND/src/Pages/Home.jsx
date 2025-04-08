import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [panelopen,setPanelopen] = useState(false)
  const panelref = useRef(null)
  const panelcloseref = useRef(null)
  const submithandler = (e)=>{
    e.preventDefault()
  }
  useGSAP(()=>{
    if(panelopen){
      gsap.to(panelref.current, {
        height: "70%",
        padding:20
      });
      gsap.to(panelcloseref.current,{
        opacity:1
      })
    }else{
      gsap.to(panelref.current, {
        height: "0%",
        padding:0
      });
      gsap.to(panelcloseref.current,{
        opacity:0
      })
    }
  },[panelopen])
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
          src="https://www.shutterstock.com/image-vector/city-map-dhaka-coxs-bazar-260nw-2277305657.jpg"
        />
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
          <div className="h-[30%] p-5 bg-white relative">
            <h5 ref={panelcloseref} onClick={()=>{
              setPanelopen(false)
            }} className=" absolute opacity-0 top-6 text-2xl right-6">
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
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
                type="text"
                placeholder="Add a Pick-up Location"
              />
              <input
                onClick={() => {
                  setPanelopen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter your Destination"
              />
            </form>
          </div>
          <div ref={panelref} className="h-0 bg-white ">
            <LocationSearchPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
