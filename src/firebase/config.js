import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUC5rNFQb_Zqhef6M1LjmeVEZLulF20ZI",
  authDomain: "fir-81611.firebaseapp.com",
  projectId: "fir-81611",
  storageBucket: "fir-81611.appspot.com",
  messagingSenderId: "334320747608",
  appId: "1:334320747608:web:464d04ce504f635d38762d",
  measurementId: "G-F3GGBDER7E"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
