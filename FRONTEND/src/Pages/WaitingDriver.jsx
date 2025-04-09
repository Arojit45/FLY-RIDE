import React, { useRef, useState } from 'react'
import WaitingForDriver from '../components/WaitingForDriver';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const WaitingDriver = () => {
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

 
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img
        className="h-full w-full object-cover  "
        src="https://www.shutterstock.com/image-vector/city-map-dhaka-coxs-bazar-260nw-2277305657.jpg"
      />
      <div ref={openref} className="fixed w-full z-10 bottom-0  bg-white px-2 py-4 pt-6">
        <WaitingForDriver setOpen={setOpen} />
      </div>
    </div>
  );
}

export default WaitingDriver