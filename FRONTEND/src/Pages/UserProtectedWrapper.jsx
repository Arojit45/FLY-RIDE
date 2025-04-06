import React, { useContext,useEffect, useState } from "react";
import { UserDataContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const {user,setUser}=useContext(UserDataContext)
  const navigate = useNavigate();
  const [isloading,setIsLoading]=useState(true)
  

  useEffect(() => {
    if (!token) {
      navigate("/UserLogin");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/UserLogin");
      });
  }, [token, navigate, setUser]);

  if(isloading){
    return(
      <div>IsLoading plese wait.....</div>
    )
  }

  return <>
  {children}
  </>
};

export default UserProtectedWrapper;
