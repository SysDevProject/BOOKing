// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBx--Opny479wNtJnBwcTiOe6u5ELA8uCA",
    authDomain: "booking-platform-b501b.firebaseapp.com",
    projectId: "booking-platform-b501b",
    storageBucket: "booking-platform-b501b.appspot.com",
    messagingSenderId: "577424313561",
    appId: "1:577424313561:web:765e8e6fab1058e8df82c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true});

  const loginForm = document.querySelector('#logInForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log("working up to here");

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
    console.log(email, password);

    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      window.location.href = "/assets/html/homepage.html";
    }).catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorCode + errorMessage);
    })
  })
  function showhide(){
    var pswrd = document.getElementById('password');
    var icon = document.querySelector('.fas');
        if (pswrd.type === 'password') {
            pswrd.type = "text";
            icon.style.color = "#7f2092";
            }
        else{
            pswrd.type = "password";
            icon.style.color = "gray";
        }
    }
