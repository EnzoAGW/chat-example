 import { initializeApp } from "firebase/app";
 import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";
 import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


 const firebaseConfig = {
  apiKey: 'YOUR_CREDENTIALS_HERE',
  authDomain:'YOUR_CREDENTIALS_HERE',
  projectId:'YOUR_CREDENTIALS_HERE',
  storageBucket:'YOUR_CREDENTIALS_HERE',
  messagingSenderId:'YOUR_CREDENTIALS_HERE',
  appId: 'YOUR_CREDENTIALS_HERE'
};

initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const database = getFirestore();