import React, { useContext } from "react";
import { UserDataContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate("/UserLogin");
  }

  return <>
  {children}
  </>
};

export default UserProtectedWrapper;
