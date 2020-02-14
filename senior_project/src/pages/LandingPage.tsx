import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import "../style/LandingPage.css";


const LandingPage: React.FC<RouteComponentProps> = ({history}) => {
  
  let appName = "ThermalComfort";
  function logout() {
    console.log("Hello logout");
    history.push('/home');
  }

  function launchSurvey() {
    console.log("HEllO wurvey");
    history.push('/survey');
  }

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
                <IonButton  onClick={launchSurvey} className="LandingButton">
                    Take Survey
                </IonButton>
                </IonItem>

                <IonItem>
                <IonButton className="LandingButton">
                    Edit Notifications
                </IonButton>
                </IonItem>

                <IonItem>
                    <IonButton onClick={logout} className="LandingButton">
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