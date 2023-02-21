// var firebaseConfig = {
//     apiKey: "AIzaSyDmjdsTt6Hu5mbwh9bqNnzQvw8Ocp8IDZU",
//     authDomain: "groovy-69d56.firebaseapp.com",
//     databaseURL: "https://groovy-69d56-default-rtdb.firebaseio.com",
//     projectId: "groovy-69d56",
//     storageBucket: "groovy-69d56.appspot.com",
//     messagingSenderId: "493403669760",
//     appId: "1:493403669760:web:b2a4768c9b66200e765fe5",
//     measurementId: "G-6PCR1CVDGZ"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// // Get a reference to the Firebase authentication service
// var auth = firebase.auth();

// // Get a reference to the database
// var database = firebase.database();

// // Function to register a user and add user information to the database
//     function signUp() {
//         var email = document.getElementById('register-email').value;
//         var password = document.getElementById('register-password').value;
//         var name = document.getElementById('register-name').value;
    
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 var userInfo = {
//                     name: name,
//                     email: email,
//                     password: password
//                 };
    
//                 // Add user information to the database
//                 firebase.database().ref('users/' + userCredential.user.uid).set(userInfo)
//                     .then(() => {
//                         console.log('User information added to database');
//                         // Redirect the user to the home page
//                         window.location.href = 'index.html';
//                     })
//                     .catch((error) => {
//                         console.error('Error adding user information to database', error);
//                         alert(error.message);
//                     });
//             })
//             .catch((error) => {
//                 var errorMessage = error.message;
//                 console.error('Error signing up user', error);
//                 alert(errorMessage);
//             });
//     }
    
  




// // Function to sign in a user
// function signIn() {
//     var email = document.getElementById('login-email').value;
//     var password = document.getElementById('login-password').value;

//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // User is signed in
//             const user = userCredential.user;
//             // Redirect the user to the home page
//             window.location.href = 'home.html';
//             console.log('Logged in user!');
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error(errorMessage);
//         });
// }

// // Function to get the value of an element by ID
// function getId(id) {
//     return document.getElementById(id).value;
// }




var firebaseConfig = {
    apiKey: "AIzaSyDmjdsTt6Hu5mbwh9bqNnzQvw8Ocp8IDZU",
    authDomain: "groovy-69d56.firebaseapp.com",
    databaseURL: "https://groovy-69d56-default-rtdb.firebaseio.com",
    projectId: "groovy-69d56",
    storageBucket: "groovy-69d56.appspot.com",
    messagingSenderId: "493403669760",
    appId: "1:493403669760:web:b2a4768c9b66200e765fe5",
    measurementId: "G-6PCR1CVDGZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the Firebase authentication service
var auth = firebase.auth();

// Get a reference to the database
var database = firebase.database();

function renderGoogleSignInButton() {
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '493403669760-1tdccm99vfpt28tu5r90e6oe4kbs7nhs.apps.googleusercontent.com'
    }).then(() => {
      gapi.signin2.render('google-signin-button', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onGoogleSignInSuccess,
        'onfailure': onGoogleSignInFailure
      });
    });
  });
}



// Function to register a user and add user information to the database
    function signUp() {
        var email = document.getElementById('register-email').value;
        var password = document.getElementById('register-password').value;
        var name = document.getElementById('register-name').value;
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var userInfo = {
                    name: name,
                    email: email,
                    password: password
                };
    
                // Add user information to the database
                firebase.database().ref('users/' + userCredential.user.uid).set(userInfo)
                    .then(() => {
                        console.log('User information added to database');
                        // Redirect the user to the home page
                        window.location.href = 'index.html';
                    })
                    .catch((error) => {
                        console.error('Error adding user information to database', error);
                        alert(error.message);
                    });
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.error('Error signing up user', error);
                alert(errorMessage);
            });
    }
    
  




// Function to sign in a user
function signIn() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User is signed in
            const user = userCredential.user;
            // Redirect the user to the home page
            window.location.href = 'home.html';
            console.log('Logged in user!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
}

// Function to get the value of an element by ID
function getId(id) {
    return document.getElementById(id).value;
}




