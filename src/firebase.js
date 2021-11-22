import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARt6Rra8a6yE9Tdq8SB9FtiPACZNOm6LY",
  authDomain: "fir-chat-app-d9585.firebaseapp.com",
  projectId: "fir-chat-app-d9585",
  storageBucket: "fir-chat-app-d9585.appspot.com",
  messagingSenderId: "862043125647",
  appId: "1:862043125647:web:d46a2cdd304320bbad7dfa",
  measurementId: "G-NCT3KZTQE5"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }