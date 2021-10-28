import firebase from "firebase";
require("@firebase/firestore");


	  const firebaseConfig = {
  apiKey: "AIzaSyAPmyrL0i2F6YBVBxmG8AOGBABNGfwJ7Rs",
  authDomain: "recipeapp-fa251.firebaseapp.com",
  projectId: "recipeapp-fa251",
  storageBucket: "recipeapp-fa251.appspot.com",
  messagingSenderId: "920934576153",
  appId: "1:920934576153:web:e1b16dacd4dc2ae3a97a88"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();