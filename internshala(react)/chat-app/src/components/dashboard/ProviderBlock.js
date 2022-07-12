import React from "react";
import { useState } from "react";
import { Alert, Button, Icon, Tag } from "rsuite";
import { auth } from "../../misc/firebase";
import firebase from "firebase";

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    "google.com": auth.currentUser.providerData.some(
      (data) => data.providerId === "google.com"
    ),
    "facebook.com": auth.currentUser.providerData.some(
      (data) => data.providerId === "facebook.com"
    ),
  });

  //   handlers for linking and unlinking
  const updateIdConnected = (providerId, value) => {
    setIsConnected((p) => {
      return {
        ...p,
        [providerId]: value,
      };
    });
  };

  const unLink = async (providerId) => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error(`You can not disconnect from ${providerId}`);
      }

      await auth.currentUser.unlink(providerId);
      updateIdConnected(providerId, false);
      Alert.info(`Disconnected from ${providerId}`, 4000);
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };

  const unlinkFacebook = () => {
    unLink("faceook.com");
  };
  const unlinkGoogle = () => {
    unLink("google.com");
  };

  const link = async (provideObj) => {
    try {
      await auth.currentUser.linkWithPopup(provideObj);
      Alert.info(`Linked to ${provideObj.providerId}`, 4000);
      updateIdConnected(provideObj.providerId, true);
    } catch (error) {
      Alert.error(err.message, 4000);
    }
  };

  const linkFacebook = () => {
    link(new firebase.auth.FacebookAuthProvider());
  };
  const linkGoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      {/* checking is connected to facebook or google  */}
      {isConnected["google.com"] && (
        <Tag color="green" closable onClose={unlinkGoogle}>
          <Icon icon="google" /> Connected
        </Tag>
      )}

      {isConnected["facebook.com"] && (
        <Tag color="blue" closable onClose={unlinkFacebook}>
          <Icon icon="facebook" /> Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected["google.com"] && (
          <Button block color="green" onClick={linkGoogle}>
            <Icon icon="google" /> Link to Google
          </Button>
        )}

        {!isConnected["facebook.com"] && (
          <Button block color="blue" onClick={linkFacebook}>
            <Icon icon="facebook" /> Link to Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
