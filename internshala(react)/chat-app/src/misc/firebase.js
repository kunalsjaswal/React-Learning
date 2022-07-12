import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

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
export const auth=app.auth();
export const database=app.database();
export const storage=app.storage();