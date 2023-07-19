/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9f-Jr_VRNZdQAWLYzZdHmviIAYgPOnl0",
  authDomain: "bookish-redux-toolkit.firebaseapp.com",
  projectId: "bookish-redux-toolkit",
  storageBucket: "bookish-redux-toolkit.appspot.com",
  messagingSenderId: "674492618876",
  appId: "1:674492618876:web:eac2a7923ee7c8c54851f9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
