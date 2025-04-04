import React, { useState } from "react";
import { Link } from "react-router-dom";
import CaptainContext, { CaptainDataContext } from "../context/Captaincontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleplate, setVehiclePlate] = useState("");
  const [vehiclecapacity, setVehicleCapacity] = useState("");
  const [vehicalvehicleType, setVehicalVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      Vehicle: {
        color: vehicleColor,
        plate: vehicleplate,
        capacity: vehiclecapacity,
        vehicleType: vehicalvehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      CaptainData
    );

    if(response.status==200){
      const data =response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/Captainhome')
    }


    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleColor("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicalVehicleType("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="logo"
          className="w-20 mb-10"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Whats your Name?</h3>
          <div className=" flex gap-4 mb-5">
            <input
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] rounded  px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => [setLastname(e.target.value)]}
              className="bg-[#eeeeee] rounded  px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">Whats your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
            placeholder="Phone number or email"
          />
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex gap-2">
              <input
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                required
                value={vehicleplate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate"
              />
            </div>
            <div className="flex gap-2">
              <input
                required
                value={vehiclecapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="bg-[#eeeeee] rounded px-4 w-1/2 py-2 border text-lg placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
              />
              <select
                required
                value={vehicalvehicleType}
                onChange={(e) => setVehicalVehicleType(e.target.value)}
                className="bg-[#eeeeee] rounded px-4 w-1/2 py-2 border text-lg placeholder:text-base"
              >
                <option value="">VehicleType</option>
                <option value="Car">Car</option>
                <option value="Auto">Auto</option>
                <option value="Bike">Bike</option>
              </select>
            </div>
          </div>
          <button className="bg-[#111] text-white font-semibold rounded mb-2 px-4 py-2  w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/CapatainLogin" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight">
          This site is protector by reCAPTCHA and the{" "}
          <span className="text-blue-500 underline">Google Privacy Policy</span>
          {""}
          and{" "}
          <span className="text-blue-500 underline">
            Terms of Service apply
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
