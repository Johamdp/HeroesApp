import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmeuS2PYuCTkRlKpsG6UXZ-e_hgEvTGsY",
  authDomain: "heroesapp-1d1ae.firebaseapp.com",
  projectId: "heroesapp-1d1ae",
  storageBucket: "heroesapp-1d1ae.appspot.com",
  messagingSenderId: "156238907721",
  appId: "1:156238907721:web:cbc329a2ad1d2dbe2c7298",
  measurementId: "G-GDDPJTT68P"
};

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);