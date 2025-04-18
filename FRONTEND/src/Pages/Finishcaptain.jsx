import React, { useContext, useEffect, useState } from 'react'
import StarRating from '../components/StarRating';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/Usercontext';


const Finishcaptain = () => {
const navigator =useNavigate()
const [isChecked, setIsChecked] = useState(false);
const {ridestart} =useContext(UserDataContext)

const handleclick = async()=>{
  console.log(ridestart._id)
    try {
       const response = await axios.post(
         `${import.meta.env.VITE_BASE_URL}/rides/complete`,
         {
           rideId:ridestart._id,
         },{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
         }
       );
       if (response.status === 200) {
         navigator("/Captainhome");
       }
    } catch (error) {
      console.log(error)
    }
    

  }
    
  return (
    <div className="h-screen flex  w-screen overflow-hidden  gap-3">
      <div className='fixed w-full h-full  justify-center items-center gap-3 z-10 bottom-0 flex flex-col bg-white rounded-t-xl px-1 py-10 pt-14"'>
        <div className=" w-full p-2 bg-yellow-400 rounded-xl flex items-center justify-between">
          <div className="flex justify-center items-center gap-2">
            <div className=" bg-gray-200  rounded-full overflow-hidden">
              <img
                className="h-12 w-12 object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              />
            </div>
            <h3 className="text-lg font-medium">Arojit</h3>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹103.30</h4>
            <p className="text-sm  text-gray-600">Earned</p>
          </div>
        </div>
        <div className="w-full flex flex-col  ">
          <div className="flex items-center gap-4 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h5 className="text-sm font-extralight text-gray-300">Pick Up</h5>
              <h3 className="text-lg font-medium">56211-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Barrackpore</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-line"></i>
            <div>
              <h5 className="text-sm font-extralight text-gray-300">
                Drop Off
              </h5>
              <h3 className="text-lg font-medium">56211-A</h3>
              <p className="text-sm -mt-1 text-gray-600">kolkata</p>
            </div>
          </div>
          <div className="p-3 flex flex-col ">
            <h5 className="text-sm font-extralight text-gray-300">Trip Fare</h5>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Google Pay</h3>
              <h3 className="text-lg font-semibold">₹143</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Discount</h3>
              <h3 className="text-lg font-semibold">₹13</h3>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Paid Amount</h3>
              <h3 className="text-lg font-semibold">₹120</h3>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div className="flex w-full justify-between items-center p-2 ">
              <h3 className="text-lg font-medium">Payment Complete</h3>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </div>
          </div>
          <div className="px-3 py-5">
            <h3 className="text-lg font-medium">Give Rating to user</h3>
            <StarRating />
          </div>
          <div className="w-full flex  justify-center">
            <div
              onClick={handleclick}
              className="bg-green-600 w-[90%] flex items-center justify-center text-white rounded-xl h-10 "
            >
              <button form="otpForm" type="submit">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finishcaptain