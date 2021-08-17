import firebase from 'firebase'
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyD13k4wGyHrSLiLQLxkKUxtq_H22-uJwI8",
    authDomain: "facebook-messager-clone-52931.firebaseapp.com",
    projectId: "facebook-messager-clone-52931",
    storageBucket: "facebook-messager-clone-52931.appspot.com",
    messagingSenderId: "688415231671",
    appId: "1:688415231671:web:c2b94cb4b3ccbca8e08732",
    measurementId: "G-H41FQM6SZ9"
});
const db=firebaseApp.firestore();
export {db}