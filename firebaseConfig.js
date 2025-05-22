// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import AsyncStorage from "@react-native-async-storage/async-storage";   
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkOsfDoVWfYmHrmHGR7MtP3uM-stlktO4",
  authDomain: "sales-14ced.firebaseapp.com",
  projectId: "sales-14ced",
  storageBucket: "sales-14ced.firebasestorage.app",
  messagingSenderId: "423148230161",
  appId: "1:423148230161:web:f206f5a2fa8f93785743b0",
  measurementId: "G-T6H6KFNGL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {   persistence: getReactNativePersistence(AsyncStorage) });
const analytics = getAnalytics(app);
// ✅ Export them
export { auth, analytics };