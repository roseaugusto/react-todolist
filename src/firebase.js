 import firebase from 'firebase'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAi-WFLFL61dai3_9emdjsoGfbOIYOjzlg",
    authDomain: "react-crud-f14ba.firebaseapp.com",
    databaseURL: "https://react-crud-f14ba.firebaseio.com",
    projectId: "react-crud-f14ba",
    storageBucket: "react-crud-f14ba.appspot.com",
    messagingSenderId: "793324919245",
    appId: "1:793324919245:web:a236cde4ef02e3f9174c84"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();