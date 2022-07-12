import React,{ useContext } from "react";
import { Navigate } from "react-router";
import { profileContext } from "../App";
import { ProfileContext } from "../context/ProfileContext";
import Signin from "../pages/Signin";


const PublicRoute = ({ children, ...routeProps }) => {
  const profile = useContext(ProfileContext);

  if(profile){
   return <Navigate to='/'/>
  }

  return (
  <>
   <Signin/>
  </>
  );
};

export default PublicRoute;
