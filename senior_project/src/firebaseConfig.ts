import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyArNZ22gj3Uhdd5h0TZ5ojDgu7LWLpmWKs",
    authDomain: "thermalcomfortdataapp.firebaseapp.com",
    databaseURL: "https://thermalcomfortdataapp.firebaseio.com",
    projectId: "thermalcomfortdataapp",
    storageBucket: "thermalcomfortdataapp.appspot.com",
    messagingSenderId: "683582280356",
    appId: "1:683582280356:web:39f0e8e22efe1d57d18c31"
}

firebase.initializeApp(config)

export async function loginUser(email: string, password: string) {
    // authenticate with firebase
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)

        console.log(res)
        return true;
    } catch(error) {
        console.log(error)
        return false;
    } 
}

export async function registerUser(email: string, password: string) {
    // authenticate with firebase
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true;
    } catch(error) {
        console.log(error)
        return false;
    } 
}