import React from "react";
import { Routes, Route } from "react-router";
import "rsuite/dist/styles/rsuite-default.css";
import Signin from "./pages/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { auth, database } from "./misc/firebase";
import { ProfileContext } from "./context/ProfileContext";



function App() {

const [profile,setProfile]=useState(null);
useEffect(()=>{
auth.onAuthStateChanged(authobj=>{
  if (authobj){
    database.ref(`/profiles/${authobj.uid}`).on ('value',(snap)=>{
      const {name,createdAt}=snap.val()
      
      const data={
        name,
        createdAt,
        uid:authobj.uid,
        email:authobj.email
      }
      
      setProfile(data)
    })

  }else{
    setProfile(null)
  }
})
},[])

  return (
    <ProfileContext.Provider value={profile}>
      <Routes>
        <Route path="/signin" element={<PublicRoute />}></Route>
        <Route path="/" element={<PrivateRoute />}></Route>
      </Routes>
    </ProfileContext.Provider>
  );
}

export default App;
