import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/Usercontext";
import { CaptainDataContext } from "../context/Captaincontext";
import { Socketcontext } from "../context/Socketcontext";


const Riding = () => {
  const navigate = useNavigate()
  const {socket} = useContext(Socketcontext)
  const { confirmcaptain, setConfirmcaptain } = useContext(CaptainDataContext);
  const { ridestart } = useContext(UserDataContext);
  console.log("Ridestart in Riding:", ridestart);

 socket.on('ride-complete',ride=>{
  console.log(ride)
  navigate("/Home");

 })



  return (
    <div className="h-screen w-screen">
      <Link
        to="/Home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
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
              <h3 className="font-normal text-lg -mt-1 capitalize">{`${ridestart.captain.fullname.firstname} ${ridestart.captain.fullname.lastname}`}</h3>
              <h1 className="text-semibold text-2xl">
                {ridestart.captain.Vehicle.plate}
              </h1>
              <h3 className="font-normal text-base -mt-1">
                {ridestart.captain.Vehicle.vehicleType}
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
                  {ridestart.destination.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 ">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ridestart.fare}</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/finishuser"}>
          <button className="w-full  bg-green-600 text-white font-semibold p-2 rounded-lg">
            Make a payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Riding;
