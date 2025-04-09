import React from "react";
import { Link } from "react-router-dom";


const Riding = () => {
  return (
    <div className="h-screen w-screen">
      <Link to='/Home'className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-4-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover  "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-4 bg-white">
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

            <div className="flex items-center gap-4 p-5 ">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.30</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full  bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
