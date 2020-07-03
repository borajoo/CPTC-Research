import { toast } from './toast'
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

firebase.initializeApp(config);

export async function pushData(data: any, user: string) {
    firebase.firestore().collection('tempPoint').add({
        userId: user,
        buildingNumber: data.buildingNumber,
        roomNumber: data.roomNumber,
        thermalSensation: data.thermalSensation,
        thermalPreference: data.thermalPreference,
        airVelocity: data.airVelocity,
        humiditySensation: data.humiditySensation,
        clothingLevel: data.clothingLevel,
        recentAction: data.recentAction,
    });
}

export function logoutUser() {
    return firebase.auth().signOut()
}

export async function loginUser(email: string, password: string) {
    // authenticate with firebase
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        return res;
    } catch(error) {
        toast(error.message, 4000)
        return false;
    }
}

export async function registerUser(email: string, password: string) {
    // authenticate with firebase
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return true;
    } catch(error) {
        toast(error.message, 4000);
        return false;
    }
}
