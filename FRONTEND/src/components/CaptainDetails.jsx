import React, { useContext } from 'react'
import {CaptainDataContext} from '../context/Captaincontext'

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
  
  return (
    <div>
      <div className="absolute w-full bottom-0 p-6 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
              <img
                className="h-20 w-20 object-cover"
                src="https://cdn-01.cms-ap-v2i.applyflow.com/pinnacle-people/wp-content/uploads/2023/09/slide-2.png"
              />
            </div>
            <h4 className="text-lg capitalize font-medium">
              {captain.fullname.firstname +" "+captain.fullname.lastname}
            </h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹103.30</h4>
            <p className="text-sm  text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-2 mt-8 gap-5  rounded-xl bg-gray-100  items-center justify-evenly">
          <div className="text-center ">
            <i className=" text-3xl mb-2 font-thin  ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center ">
            <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center ">
            <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails