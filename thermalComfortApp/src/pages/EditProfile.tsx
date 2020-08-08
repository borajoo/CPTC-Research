import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonSelect, IonSelectOption, IonInput, IonBackButton, IonButtons, IonButton }
  from '@ionic/react';
import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router';
import "../style/Survey.css";
import { pushProfile } from '../firebaseConfig';

const SetProfile: React.FC<RouteComponentProps> = ({history, location}) => {
  const state: any = location.state;

  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [nativeConditions, setNativeConditions] = useState<string>();
  const [preferredConditions, setPrefConditions] = useState<string>();

  let profileData: any = {
    age: age,
    gender: gender,
    zipCode: zipCode,
    nativeConditions: nativeConditions,
    preferredConditions: preferredConditions
  };

  function selectAge(e:any) {
    profileData.age = e.detail.value;
  }

  function selectGender(e:any) {
    profileData.gender = e.detail.value;
  }

  function selectNativeLocation(e:any) {
    profileData.nativeLocation = e.detail.value;
  }

  function selectNativeConditions(e:any) {
    profileData.nativeConditions = e.detail.value;
  }

  function selectPrefConditions(e:any) {
    profileData.preferredConditions = e.detail.value;
  }

  function postProfile(){
    if (state.uid) {
      pushProfile(profileData, state.uid);
      history.push('/landingPage')
  }
  }

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonBackButton defaultHref="/landingPage" />
          </IonButtons>
          <IonTitle>Set Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="surveyCard">
          <IonCardHeader>
            <IonCardTitle>
              Please provide some information about yourself for our research.
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="fixed">Age</IonLabel>
              <IonInput className="inputField" value={age} placeholder="Enter Number" text-right inputmode="numeric" onIonChange={e => setAge(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Gender identity</IonLabel>
              <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
                <IonSelectOption value="cisgender female">Cisgender Female</IonSelectOption>
                <IonSelectOption value="cisgender male">Cisgender Male</IonSelectOption>
                <IonSelectOption value="transgender female">Transgender Female</IonSelectOption>
                <IonSelectOption value="transgender male">Transgender Male</IonSelectOption>
                <IonSelectOption value="nonbinary">Nonbinary</IonSelectOption>
                <IonSelectOption value="bigender">Bigender</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
                <IonSelectOption value="prefer not to answer">Prefer not to answer</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel className="inputLabel" position="fixed">Zip Code</IonLabel>
              <IonInput className="inputField" value={zipCode} placeholder="Enter Number" onIonChange={e => setZipCode(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Native environment conditions</IonLabel>
              <IonSelect value={nativeConditions} multiple={true} placeholder= "Select One" onIonChange={e => setNativeConditions(e.detail.value)}>
                <IonSelectOption value="cold">Cold</IonSelectOption>
                <IonSelectOption value="mild">Mild</IonSelectOption>
                <IonSelectOption value="hot">Hot</IonSelectOption>
                <IonSelectOption value="humid">Humid</IonSelectOption>
                <IonSelectOption value="mildly humid">Mildly humid</IonSelectOption>
                <IonSelectOption value="dry">Dry</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Room condition preferences</IonLabel>
              <IonSelect value={preferredConditions} placeholder= "Select One" onIonChange={e => setPrefConditions(e.detail.value)}>
                <IonSelectOption value="very cold">Very cold</IonSelectOption>
                <IonSelectOption value="cold">Cold</IonSelectOption>
                <IonSelectOption value="cool">Cool</IonSelectOption>
                <IonSelectOption value="neutral">Neutral</IonSelectOption>
                <IonSelectOption value="warm">Warm</IonSelectOption>
                <IonSelectOption value="hot">Hot</IonSelectOption>
                <IonSelectOption value="very hot">Very Hot</IonSelectOption>
              </IonSelect>

            </IonItem>
            </IonCardContent>
            <IonButton className="SubmitButton" onClick={postProfile}>
              Submit
          </IonButton>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SetProfile;
