import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkEdaosZCvpRkuyQeKfn-EeztfxrVglJc",
  authDomain: "rohit-grocery-ecommerce.firebaseapp.com",
  projectId: "rohit-grocery-ecommerce",
  storageBucket: "rohit-grocery-ecommerce.appspot.com",
  messagingSenderId: "335396466869",
  appId: "1:335396466869:web:2fc19e0a981e9282c3cefc",
  measurementId: "G-XMQSPJQ84F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const usr = auth.currentUser;
let uid = "";

export const createUser = (email: any, password: any, func: Function) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    func(err.message);
    console.log(err);
  }
};

export const loginUser = (email: any, password: any, func: Function) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    func(err.message);
    console.log(err);
  }
};


export function stateChangeLogin(func: Function) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      func(user);
    }
  });
}
