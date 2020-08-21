import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonItem, IonButton }
  from '@ionic/react';
import React from 'react';
import "../style/LandingPage.css";
import { RouteComponentProps } from 'react-router';

const SurveyComplete: React.FC<RouteComponentProps> = ({history}) => {
  function launchHome() {
    history.push({
      pathname: '/landingPage',
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Thank you for taking our survey!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
              <IonItem lines="none">
                <IonButton  onClick={launchHome} className="LandingButton">
                  Return to Home
                </IonButton>
              </IonItem>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SurveyComplete;