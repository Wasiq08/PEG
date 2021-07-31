import firebase from "firebase/app";
import "firebase/database";


const config = {
    apiKey: "AIzaSyDF4fBXFymnuTTlK9zxtyI8elXdUHLJMQA",
    authDomain: "application-19ca3.firebaseapp.com",
    databaseURL: "https://application-19ca3-default-rtdb.firebaseio.com",
    projectId: "application-19ca3",
}

function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}

initFirebase();

export { firebase }
