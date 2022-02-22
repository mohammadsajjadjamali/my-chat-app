import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA9_Bv-tLKK_vXaVUiDawsEybUik4MprVc",
  authDomain: "mehrgram-a7dbd.firebaseapp.com",
  projectId: "mehrgram-a7dbd",
  storageBucket: "mehrgram-a7dbd.appspot.com",
  messagingSenderId: "786850119107",
  appId: "1:786850119107:web:6a6dfc55209dad34a55176"
  }).auth();