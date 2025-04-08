import React from 'react'
import WaitingForDriver from '../components/WaitingForDriver';

const WaitingDriver = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img
        className="h-full w-full object-cover  "
        src="https://www.shutterstock.com/image-vector/city-map-dhaka-coxs-bazar-260nw-2277305657.jpg"
      />
      <div className="fixed w-full z-10 bottom-0  bg-white px-2 py-4 pt-6">
        <WaitingForDriver />
      </div>
    </div>
  );
}

export default WaitingDriver