 import { initializeApp } from "firebase/app";
 import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";
 import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


 const firebaseConfig = {
  apiKey: 'AIzaSyBDgJBiJL6-b8mdYOk-W-eA4HJJFK2Zv6k',
  authDomain: 'chatapp-9b248.firebaseapp.com',
  projectId: 'chatapp-9b248',
  storageBucket: 'chatapp-9b248.appspot.com',
  messagingSenderId: '576643429573',
  appId: '1:576643429573:web:76ef85861ab7c7b0082cac'
};

initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const database = getFirestore();