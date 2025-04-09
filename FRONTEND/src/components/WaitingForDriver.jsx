import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className="text-xl text-center">
        <i
          onClick={() => {
            props.setOpen(prev => !prev);
            
          }}
          class="ri-arrow-down-wide-line"
        ></i>
      </h5>
      <div className=" flex justify-between  border-b-2 p-3">
        <h3 className="text-xl font-semibold  text-center mb-3">
          Meet at the Pickup Point
        </h3>
        <div className="h-12 w-12 rounded-lg bg-black flex flex-col justify-center items-center ">
          <h1 className="text-white">5</h1>
          <h3 className="text-white">min</h3>
        </div>
      </div>
      <div className="flex  flex-col gap-5 justify-between items-center">
        <div className="flex justify-between items-center  w-full gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
            <img
              className="h-20 w-20 object-cover"
              src="https://cdn-01.cms-ap-v2i.applyflow.com/pinnacle-people/wp-content/uploads/2023/09/slide-2.png"
            />
          </div>
          <div className="flex flex-col  items-end flex-grow px-2 py-1 rounded-md">
            <h3 className="font-normal text-lg -mt-1">Arojit</h3>
            <h1 className="text-semibold text-2xl">TRO10234</h1>
            <h3 className="font-normal text-base -mt-1">
              White Suzuki S-Presso LXI
            </h3>
            <h4 className="flex items-center text-lg gap-1">
              <i className="text-xl ri-star-s-fill text-yellow-500"></i> 4.9
            </h4>
          </div>
        </div>
        <div className="  w-full p-2">
          <input
            className="h-12 bg-gray-100 text-center rounded-lg text-lg  text-black"
            type="text"
            placeholder="Send a message.."
          />
        </div>
        <div className="flex w-full justify-evenly border-b-2 p-3">
          <div className="flex justify-center items-center flex-col">
            <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
              <i className="text-3xl text-blue-600 ri-shield-fill"></i>
            </div>
            <h2 className="text-base text-black">Safety</h2>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
              <i className="text-3xl text-blue-600  ri-map-pin-user-fill"></i>
            </div>
            <h2 className="text-base text-black">Share my trip</h2>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
              <i className="text-3xl text-blue-600 ri-phone-line"></i>
            </div>
            <h2 className="text-base text-black">Call driver</h2>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex items-center gap-4 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">56211-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Gujrath
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.30</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
