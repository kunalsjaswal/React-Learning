import React,{useEffect, useState} from 'react';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';

const SignIn = () => {
    const styling={
        position:"absolute",
        width:"60%",
        top:"1%",
        fontSize:"1.2vw",
        display:"none"
    }

    const signInWithProvider=async(provider)=>{
        
        try {
            const {additionalUserInfo,user}=await auth.signInWithPopup(provider);
            
            // storing new user into the firebase database 
            if(additionalUserInfo.isNewUser){

                await database.ref(`/profile/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                });
            }
           
                        

        } catch (err) {
           let failAlert=document.getElementById('failAlert');
           failAlert.style.display="block";
           
           const alertFnx=()=>{
           failAlert.style.display="none";
           }
           setTimeout(alertFnx,6000);

        }
    }

    const onFacebookSignIn=()=>{
        signInWithProvider(new firebase.auth.FacebookAuthProvider())

    }
    const onGoogleSignIn=()=>{
        signInWithProvider(new firebase.auth.GoogleAuthProvider())
    }
    
   
    
  return (
   <div className="container" style={{marginTop:"10%"}}>

    {/* alert  */}
    <div className="alert alert-danger alert-dismissible fade show" role="alert" id='failAlert' style={styling}>
        <strong>Error Message: </strong>error in logging in
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

        <h1 className='mt-3 text-center fs-1 text-dark'>Welcome to K-Chat Application</h1>
        <p className='text-center fs-5'>Progressive chat platform for people</p>

            <div className="row justify-content-center">
            
                <button type="button" className="btn btn-primary col-lg-8 col-md-10 mt-4 p-3" onClick={onFacebookSignIn}>
                    <i className="fa-brands fa-facebook-f fs-4"/>
                </button>

                <button type="button" className="btn d-block btn-success col-lg-8 col-md-10 mt-2 p-3" onClick={onGoogleSignIn}>
                    <i className="fa-brands fa-google fs-4"/>
                </button>
            </div>
   </div>
    )
}

export default SignIn