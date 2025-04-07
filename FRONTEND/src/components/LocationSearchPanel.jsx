import React from "react";
import { useNavigate } from "react-router-dom";


const LocationSearchPanel = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/BookingPage");
    }
    //Sample of location data
    const location = [
      "24B,Badharghat,Agartala,Tripura,Paul Maruti Workshop",
      "20B,Bishalghar,Agartala,Tripura,Paul Maruti Workshop",
      "13B,Biloniya,Agartala,Tripura,Paul Maruti Workshop",
      "89A,Barrackpore,Agartala,Tripura,Paul Maruti Workshop",
    ];
  return (
    <div>
        {
            location.map(function(e,indx){
                return (
                  <div key={indx} onClick={handleClick} className="flex border-2  border-gray-100 active:border-black p-3 rounded-xl items-center justify-start my-2  gap-4">
                    <h2 className="bg-[#eee]  h-8 flex items-center justify-center w-12 rounded-full">
                      <i className="ri-map-pin-line"></i>
                    </h2>
                    <h4 className=" text-sm font-normal">
                      {e}
                    </h4>
                  </div>
                );
            })
        }
    </div>
  );
};

export default LocationSearchPanel;
