import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjrfL5mgbnmBiaGfQSG6sqy5e5E9Mj7uo",
    authDomain: "crud-657b5.firebaseapp.com",
    projectId: "crud-657b5",
    storageBucket: "crud-657b5.appspot.com",
    messagingSenderId: "351131401722",
    appId: "1:351131401722:web:cbf3ac74bdec81b3d93843"
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref();