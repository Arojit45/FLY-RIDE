import React, { useContext,useEffect } from "react";
import { UserDataContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate("/UserLogin");
    }
  },[token])

  return <>
  {children}
  </>
};

export default UserProtectedWrapper;
