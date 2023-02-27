import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw-O3diii-99L0J2KjB_SVS4ycngD7ZkE",
  authDomain: "mineblog-17b37.firebaseapp.com",
  projectId: "mineblog-17b37",
  storageBucket: "mineblog-17b37.appspot.com",
  messagingSenderId: "931102795117",
  appId: "1:931102795117:web:216d8da5c17b08429c6664"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 