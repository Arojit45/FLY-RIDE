import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/Captaincontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isloading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/CapatainLogin");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/CapatainLogin");
      });
  }, [token, navigate, setCaptain]);

  if (isloading) {
    return <div>is Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
