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

export async function pushData(data: any, userEmail: string) {
    firebase.firestore().collection('users').doc(userEmail).collection('surveys').add({
        "buildingNumber": data.buildingNumber,
        "roomNumber": data.roomNumber,
        "thermalSensation": data.thermalSensation,
        "thermalPreference": data.thermalPreference,
        "airCirculationSensation": data.airCirculationSensation,
        "humiditySensation": data.humiditySensation,
        "clothing": data.clothing,
        "recentAction": data.recentAction,
        "timeStamp": data.timestamp,
        "temperature": data.temp,
        "windSpeed": data.windspeed,
        "humidity": data.humidity,
    });
}

export async function getNotifs(userEmail: string) {
    return firebase.firestore()
        .collection('users')
        .doc(userEmail)
        .collection('notifications')
        .doc('notifications')
        .get();
}

export async function pushNotifs(data: any, userEmail: string) {
    const ref = firebase.firestore().collection('users').doc(userEmail).collection('notifications').doc('notifications');
    await ref.set({
        "eightAm": data.eightAm,
        "nineAm": data.nineAm,
        "tenAm": data.tenAm,
        "elevenAm": data.elevenAm,
        "twelvePm": data.twelvePm,
        "onePm": data.onePm,
        "twoPm": data.twoPm,
        "threePm": data.threePm,
        "fourPm": data.fourPm,
        "fivePm": data.fivePm,
        "sixPm": data.sixPm,
        "sevenPm": data.sevenPm,
        "eightPm": data.eightPm,
    });
}

export async function getProfile(userEmail: string) {
    return firebase.firestore()
        .collection('users')
        .doc(userEmail)
        .collection('profile')
        .doc('profile')
        .get();
}

export async function pushProfile(data: any, userEmail: string) {
    const ref = firebase.firestore().collection('users').doc(userEmail).collection('profile').doc('profile');
    await ref.set({
        "calPolyStatus": data.calPolyStatus,
        "biologicalSex": data.biologicalSex,
        "genderIdentification": data.genderIdentification,
        "ethnicity": data.ethnicity,
        "disability": data.disability,
        "age": data.age,
        "economicSituation": data.economicSituation,
        "childhoodClimate": data.childhoodClimate,
        "indoorThermalPreference": data.indoorThermalPreference,
        "response": data.response,
    });
}

export async function getSurveys(userEmail: string) {
    return firebase.firestore()
        .collection('users')
        .doc(userEmail)
        .collection('surveys')
        .get();
}

export const auth = firebase.auth();
