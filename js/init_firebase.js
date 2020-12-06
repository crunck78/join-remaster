// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    // ...
    apiKey: "AIzaSyCyM_hUCp7_9YiC3xs8it8uw3Oq956MGiY",
    authDomain: "join-remaster.firebaseapp.com",
    projectId: "join-remaster",
    storageBucket: "join-remaster.appspot.com",
    messagingSenderId: "665301754583",
    appId: "1:665301754583:web:462630e81f5931f7a64692",
    measurementId: "G-XP2LP0WB1D"
};

// Initialize Firebase with a "default" Firebase project
var joinProject = firebase.initializeApp(firebaseConfig, "Join");

console.log("Project Name: ", joinProject.name);  // "[join]"

// Option 1: Access Firebase services via the joinProject variable
var joinAuth = joinProject.auth();
var joinStorage = joinProject.storage();
var joinDatabase = joinProject.database();

// Option 2: Access Firebase services using shorthand notation
// joinStorage = firebase.storage();
// joinFirestore = firebase.firestore();

let user;
joinAuth.onAuthStateChanged(function (authUser) {
    user = authUser;
});