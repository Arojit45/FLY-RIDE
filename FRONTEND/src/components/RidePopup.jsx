import React from "react";

const RidePopup = (props) => {
  return (
    <div className="p-1 flex flex-col  ">
      <h5 className="p-1 text-center w-[93%] ">
        <i
          onClick={() => {
            props.setRidepopup(false);
          }}
          className="text-gray-300 text-2xl ri-arrow-down-wide-fill"
        ></i>
      </h5>
      <h2 className="text-xl font-semibold mb-3">New Ride Available</h2>
      <div className="flex w-full rounded-xl bg-yellow-400  items-center gap-3  p-2  justify-between">
        <div className=" gap-3 flex items-center">
          <div className=" bg-gray-200  rounded-full overflow-hidden">
            <img
              className="h-12 w-12 object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            />
          </div>
          <h3 className="text-lg font-medium">Ananya pandey</h3>
        </div>
        <div className="flex flex-col items-center justify-end">
          <h4 className="text-lg font-medium">2.2km</h4>
          <h5 className="text-sm font-thin">3:23pm</h5>
        </div>
      </div>
      <div className="flex items-center gap-4 p-3 border-b-2">
        <i className="text-lg ri-map-pin-user-line"></i>
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
      <div className="flex items-center  justify-end gap-3">
        <div className="bg-gray-100 flex items-center justify-center text-black rounded-xl h-10 w-20">
          <button
            onClick={() => {
              props.setRidepopup(false);
            }}
          >
            Ignore
          </button>
        </div>
        <div className="bg-black flex items-center justify-center text-white rounded-xl h-10 w-20">
          <button>Accept</button>
        </div>
      </div>
    </div>
  );
};

export default RidePopup;
