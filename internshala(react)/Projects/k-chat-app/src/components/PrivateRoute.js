import React,{ useContext } from "react";
import { Navigate } from "react-router";
import { profileContext } from "../App";
import { ProfileContext } from "../context/ProfileContext";
import Home from "../pages/Home";


const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = useContext(ProfileContext);
  if(!profile){
   return <Navigate to='/signin'/>
  }

  return (
  <>
   <Home/>
  </>
  );
};

export default PrivateRoute;
