import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonItem, IonList, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonNav, IonIcon } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { loginUser, registerUser } from '../firebaseConfig';
import "../style/LandingPage.css";

const LandingPage: React.FC = () => {
  
  let appName = "ThermalComfort";
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{appName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard className="LandingCard">
            <IonCardContent>
                <IonItem>
                <IonButton className="LandingButton">
                    Take Survey
                </IonButton>
                </IonItem>

                <IonItem>
                <IonButton className="LandingButton">
                    Edit Notifications
                </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton className="LandingButton">
                        Logout
                    </IonButton>
                </IonItem>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
