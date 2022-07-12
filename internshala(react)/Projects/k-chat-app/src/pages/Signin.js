import React from "react";
import firebase from "firebase/app";
import { SignInDiv } from "../styles/MainStyle";
import { Button, Icon,Alert } from "rsuite";
import { auth, database } from "../misc/firebase";

const Signin = () => {
  const signinWithProvider = async (provider) => {
    try {
      const {additionalUserInfo,user} = await auth.signInWithPopup(provider);

      if(additionalUserInfo.isNewUser){
        await database.ref(`profile/${user.uid}`).set({
          user:user.displayName,
          createdAt:firebase.database.ServerValue.TIMESTAMP
        })
      }

      Alert.success('Signed In',4000)
    } catch (error) {
      Alert.error(error.message,4000)
    }
  };

  const onGoogleSignin = () => {
    signinWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  const onFacebookSignin = () => {
    signinWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  return (
    <SignInDiv>
      <h1>Welcome to K-Chat</h1>
      <p>A progressive Web Application for Chatting</p>
      <div>
        <Button
          block
          color="blue"
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "2%",
            fontSize: "1vw",
          }}
          onClick={onFacebookSignin}
        >
          <Icon icon="facebook" style={{ fontSize: "1vw" }} /> Continue with
          Facebook
        </Button>
        <Button
          block
          color="green"
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "0.5%",
            fontSize: "1vw",
          }}
          onClick={onGoogleSignin}
        >
          <Icon icon="google" style={{ fontSize: "1vw" }} /> Continue with
          Google
        </Button>
      </div>
    </SignInDiv>
  );
};

export default Signin;
