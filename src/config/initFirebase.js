import firebase from "firebase/app";
import "firebase/database";


const config = {
    apiKey: "AIzaSyB69mMXMZA2z7ABV1S-szBskr5KxrEZcqM",
    authDomain: "pec-register.firebaseapp.com",
    databaseURL: "https://pec-register-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pec-register",
}


function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}

initFirebase();

export { firebase }
