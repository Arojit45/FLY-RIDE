import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
    
    const [finishride, setFinishride] = useState(false)
    const Finishref = useRef(null)
    
    useGSAP(() => {
      if (finishride) {
        gsap.to(Finishref.current, {
          transform:'translateY(0%)'
        }); 
      } else {
        gsap.to(Finishref.current, {
          transform:"translateY(100%)"
        });   
      }
    }, [finishride]);
  return (
    <div className="h-screen relative ">
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
      <div
        onClick={() => {
          setFinishride(true);
        }}
        className="flex flex-col items-center justify-center gap-3 p-4 w-full absolute bottom-0 h-1/5 rounded-t-xl bg-yellow-400 "
      >
        <h5 className="text-2xl  border-gray-200">
          <i class="ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl">4km away</h4>
        <button className="bg-green-600 w-3/4 text-lg flex items-center justify-center text-white rounded-xl h-10">
          Complete ride
        </button>
      </div>
      <div
        ref={Finishref}
        className="fixed  w-full z-10 bottom-0 translate-y-full bg-white p-4 "
      >
        <FinishRide setFinishride={setFinishride} />
      </div>
    </div>
  );
}

export default CaptainRiding