import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
    
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishride(false);
        }}
        className="text-2xl mb-4  border-b-2 border-gray-200"
      >
        <i className="ri-arrow-left-circle-line"></i>
      </h5>
      <div className="flex w-full rounded-xl bg-yellow-400  items-center gap-3  p-2  justify-between">
        <div className="flex gap-3">
          <div className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden">
            <img
              className="h-16 w-16 object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">Ananya pandey</h3>
            {/* <div className="flex  justify-center gap-2">
              <button className=" text-sm font-normal bg-black rounded-full text-white p-2">
                Accept
              </button>
              <button className=" text-sm bg-gray-100 font-normal rounded-full p-2">
                Decline
              </button>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-end">
          <h4 className="text-lg font-medium">2.2km</h4>
          <h5 className="text-sm font-thin">3:23pm</h5>
        </div>
      </div>
      <div className="flex items-center gap-4 p-3 border-b-2">
        <div>
          <h5 className="text-sm font-extralight text-gray-300">Pick up</h5>
          <h3 className="text-lg font-medium">56211-A</h3>
          <p className="text-sm -mt-1 text-gray-600">
            Kankariya Talab, Gujrath
          </p>
        </div>
      </div>
      <div className=" p-3 border-b-2">
        <div>
          <h5 className="text-sm font-extralight text-gray-300">Drop Off</h5>
          <h3 className="text-lg font-medium">56211-A</h3>
          <p className="text-sm -mt-1 text-gray-600">
            Kankariya Talab, Gujrath
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col ">
        <h5 className="text-sm font-extralight text-gray-300">Trip Fare</h5>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Google Pay</h3>
          <h3 className="text-lg font-semibold">₹293.30</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Discount</h3>
          <h3 className="text-lg font-semibold">₹13</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Paid Amount</h3>
          <h3 className="text-lg font-semibold">₹280.30</h3>
        </div>
      </div>

      <div className="flex mt-2 p-4 items-center flex-col w-full  justify-end gap-3">
        <Link
          to={"/Captainhome"}
          className="bg-green-600 w-full text-xl flex items-center justify-center text-white rounded-xl h-10 "
        >
          <button>Finish Ride</button>
        </Link>
        <p className="text-[12px] ">
          click on finish ride if you have Completed the payment
        </p>
      </div>
    </div>
  );
}

export default FinishRide