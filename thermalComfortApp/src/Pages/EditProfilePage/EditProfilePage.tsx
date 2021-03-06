import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonSelect, IonSelectOption, IonInput, IonBackButton, IonButtons, IonButton }
from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import "./EditProfilePage.css";
import { toast } from '../../toast';
import { pushProfile, getProfile } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext'

const SetProfile: React.FC<RouteComponentProps> = ({history, location}) => {
  const { currentUser } = useAuth();

  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [nativeConditions, setNativeConditions] = useState<string>("");
  const [preferredConditions, setPrefConditions] = useState<string>("");

  useEffect(() => {
    // eslint-disable-next-line
    getProfile(currentUser.email).then((document) => {
      if (document.exists) {
        const profileData = document.data();
        console.log(profileData);
        if (profileData) {
          setAge(profileData.age);
          setGender(profileData.gender);
          setZipCode(profileData.zipCode);
          setNativeConditions(profileData.nativeConditions);
          setPrefConditions(profileData.prefConditions);
        }
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  function postProfile() {
    let profileData: any = {
      age: age,
      gender: gender,
      zipCode: zipCode,
      nativeConditions: nativeConditions,
      preferredConditions: preferredConditions
    };

    if (currentUser) {
      pushProfile(profileData, currentUser.email);
      toast("Profile updated successfully!");
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
