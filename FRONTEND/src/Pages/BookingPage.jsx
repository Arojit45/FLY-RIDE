import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";

const BookingPage = (props) => {
  const [confirmRide, setConfirmRide] = useState(false);
  const [lookingForDriver, setLookingForDriver] = useState(false);
  const confirmRideref = useRef(null);
  const lookingForDriverref = useRef(null);

  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRide]);
  useGSAP(() => {
    if (lookingForDriver) {
      gsap.to(lookingForDriverref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(lookingForDriverref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [lookingForDriver]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <img
        className="h-full w-full object-cover  "
        src="https://www.shutterstock.com/image-vector/city-map-dhaka-coxs-bazar-260nw-2277305657.jpg"
      />
      <div className="fixed w-full   z-10 bottom-0   flex flex-col  bg-white px-3 py-10 pt-14">
        <h5 className="p-1 m-1 w-[93%] absolute top-0  text-center ">
          <i
            onClick={() => {
              navigate("/Home");
            }}
            className="text-gray-300 text-2xl ri-arrow-down-wide-fill"
          ></i>
        </h5>
        <h2 className="text-2xl font-semibold mb-3">Choose a vehical</h2>
        <div
          onClick={() => {
            setConfirmRide(true);
          }}
          className="flex w-full items-center active:border-black border-2 mb-2 rounded-xl justify-between  p-3"
        >
          <img
            className="h-12"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Go Uber
              <span>
                <i class="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affortable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹193.30</h2>
        </div>
        <div
          onClick={() => {
            setConfirmRide(true);
          }}
          className="flex w-full items-center active:border-black border-2 mb-2 rounded-xl justify-between  p-3"
        >
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i class="ri-user-3-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affortable,Motorcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹103.30</h2>
        </div>
        <div
          onClick={() => {
            setConfirmRide(true);
          }}
          className="flex w-full items-center active:border-black border-2 mb-2 rounded-xl justify-between  p-3"
        >
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Auto
              <span>
                <i class="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affortable, auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹293.30</h2>
        </div>
      </div>
      <div
        ref={confirmRideref}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmRidePanel
          setLookingForDriver={setLookingForDriver}
          setConfirmRide={setConfirmRide}
        />
      </div>
      <div ref={lookingForDriverref} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <LookingForDriver setLookingForDriver={setLookingForDriver} />
      </div>
      
    </div>
  );
};

export default BookingPage;
