import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { logoutUser } from '../firebaseConfig'
import { RouteComponentProps } from 'react-router';
import "../style/LandingPage.css";
import { toast } from '../toast'


const LandingPage: React.FC<RouteComponentProps> = ({history, location}) => {

  let appName = "CPTC";

  async function logout(){
    await logoutUser();
    toast('You have logged out!');
    history.push({
      pathname: '/',
      state: {email: '', password: ''},
    });
  }

  function launchSurvey() {
    if (location.state) {
      history.push('/survey', location.state);
    }
  }

  function launchNotifications() {
    if (location.state) {
      history.push('/editNotifs', location.state);
    }
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
                <IonItem lines="none">
                <IonButton  onClick={launchSurvey} className="LandingButton">
                    Take Survey
                </IonButton>
                </IonItem>

                <IonItem lines="none">
                <IonButton  onClick={launchNotifications} className="LandingButton">
                    Edit Notifications
                </IonButton>
                </IonItem>

                <IonItem lines="none">
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
