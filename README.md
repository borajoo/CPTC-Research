# CPTC Research App

  - Ionic
  - React
  - Firebase
  
  Youtube tutorial: https://www.youtube.com/playlist?list=PLYxzS__5yYQlhvyLXSKhv4oAvl06MInSE
  
  Firebase + React: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

Data Table install:
npm install react-data-table-component styled-components


Push Data Point to Firebase:
export async function pushData(data: any, user: string) {
    firebase.firestore().collection('tempPoint').add({
        thermalSensation: data.thermalSensation,
        thermalComfort: data.thermalComfort,
        airVelocity: data.airVelocity,
        humiditySensation: data.humiditySensation,
        thermalPreference: data.thermalPreference,
        acceptability: data.acceptability,
        buildingNumber: data.buildingNumber,
        roomNumber: data.roomNumber,
        userId: user
    })
}
