const firebaseConfig = {
    apiKey: "AIzaSyB0-MFSQCxrnsun3PX-_4ktFgoQa6568tQ",
    authDomain: "first-project-25089.firebaseapp.com",
    projectId: "first-project-25089",
    storageBucket: "first-project-25089.appspot.com",
    messagingSenderId: "274463549213",
    appId: "1:274463549213:web:72677e7a08a1bc357d23f4"
  };
  const frb = firebase.initializeApp(firebaseConfig);
  
  
  console.log(frb.auth)


// function login(){
//     var email = document.getElementById("username");
//     var password = document.getElementById("password");
// }


// =================SIGNUP=====================

function signup(){
    // var name = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
  
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

