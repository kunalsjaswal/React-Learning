import firebase from 'firebase/app';

const config={
    apiKey: "AIzaSyACedkDKpVT5ZadgVABDDYzvAyLFM9pq4c",
    authDomain: "chat-web-app-1ad7b.firebaseapp.com",
    databaseURL: "https://chat-web-app-1ad7b-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-1ad7b",
    storageBucket: "chat-web-app-1ad7b.appspot.com",
    messagingSenderId: "181519901842",
    appId: "1:181519901842:web:2f7dd66245d45c81cdb24b"
  };


const app=  firebase.initializeApp(config);