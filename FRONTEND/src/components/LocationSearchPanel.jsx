import React from "react";
import { useNavigate } from "react-router-dom";



const LocationSearchPanel = ({
  suggestion,
  activeField,
  setPanelopen,
  setActiveField,
  setPickup,
  setDestination,
}) => {
  const navigate = useNavigate();

  const handleSuggestionclick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.label);
      setActiveField("destination");
    } else if (activeField === "destination") {
      setDestination(suggestion.label);
      setPanelopen(false);
      
    }
   
  };

  return (
    <div>
      {suggestion.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionclick(elem)}
          className="flex border-2   border-gray-100 active:border-black p-3 rounded-xl items-center justify-start my-2  gap-4"
        >
          <h2 className="bg-[#eee]  h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className=" text-sm font-normal">{elem.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
