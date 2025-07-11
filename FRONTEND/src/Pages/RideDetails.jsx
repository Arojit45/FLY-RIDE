import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/Captaincontext";
import { Socketcontext } from "../context/Socketcontext";
import axios from 'axios'
import { UserDataContext } from "../context/Usercontext";

const RideDetails = (props) => {
  const { confirmcaptain, setConfirmcaptain } = useContext(CaptainDataContext);
  const { ridedata,setRidedata,setRidestart,ridestart} = useContext(UserDataContext);
  const {socket,sendMessage,receiveMessage} = useContext(Socketcontext)
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
console.log("confirmcaptain:", confirmcaptain);
if (!confirmcaptain) {
  return <div>Loading...</div>; 
}
 const submithadler = async (e) => {
   e.preventDefault();
   try {
     const response = await axios.get(
       `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
       {
         params: {
           rideId: confirmcaptain._id,
           otp: otp,
         },
         headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
       }
     );

     if (response.status === 200) {
       console.log("Response data:", response.data);
       setRidestart(response.data);
       navigate("/ridecap");
     }
   } catch (error) {
     console.error("Error starting ride:", error);
   }
 };   
  return (
    <div className="h-screen flex flex-col w-screen p-2 gap-3">
      <h5
        onClick={() => {
          navigate("/Captainhome");
        }}
        className="text-2xl  border-b-2 border-gray-200"
      >
        <i className="ri-arrow-left-circle-line"></i>
      </h5>
      <div className="flex w-full  rounded-xl bg-yellow-400  items-center gap-3  p-2  justify-between">
        <div className="flex gap-3">
          <div className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden">
            <img
              className="h-16 w-16 object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">
              {confirmcaptain.user.fullname.firstname}
            </h3>
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
            {confirmcaptain.pickup.name}
          </p>
        </div>
      </div>
      <div className=" p-3 border-b-2">
        <div>
          <h5 className="text-sm font-extralight text-gray-300">Drop Off</h5>
          <h3 className="text-lg font-medium">56211-A</h3>
          <p className="text-sm -mt-1 text-gray-600">
            {confirmcaptain.destination.name}
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col ">
        <h5 className="text-sm font-extralight text-gray-300">Trip Fare</h5>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Google Pay</h3>
          <h3 className="text-lg font-semibold">₹{confirmcaptain.fare}</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Discount</h3>
          <h3 className="text-lg font-semibold">₹13</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Paid Amount</h3>
          <h3 className="text-lg font-semibold">₹{confirmcaptain.fare}</h3>
        </div>
      </div>
      <div className=" p-4 ">
        <form id="otpForm" onSubmit={submithadler}>
          <input
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            type="text"
            className="bg-[#eee] font-mono px-6 py-4 text-base rounded-lg w-full mt-3"
            placeholder="Enter OTP"
          />
        </form>
      </div>
      <div className="flex mt-2 p-4 items-center flex-col w-full  justify-end gap-3">
        <div
          form="otpForm"
          type="submit"
          className="bg-green-600 w-full flex items-center justify-center text-white rounded-xl h-10 "
        >
          <button form="otpForm" type="submit">
            confirm ride
          </button>
        </div>
        <div
          onClick={() => {
            navigate("/Captainhome");
          }}
          className="bg-red-600 w-full flex items-center justify-center text-black rounded-xl h-10 "
        >
          <button>Cancel ride</button>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
