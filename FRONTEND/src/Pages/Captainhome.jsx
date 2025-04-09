import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";

const Captainhome = () => {
  return (
    <div className="h-screen relative w-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link
          to="/CapatainLogin"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i class="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-full">
        <img
          className="h-full w-full object-cover  "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div>
        <CaptainDetails />
      </div>
    </div>
  );
};

export default Captainhome;
