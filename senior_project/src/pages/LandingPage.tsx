import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { logoutUser } from '../firebaseConfig'
import { RouteComponentProps } from 'react-router';
import "../style/LandingPage.css";
import { toast } from '../toast'


const LandingPage: React.FC<RouteComponentProps> = ({history}) => {
  
  let appName = "ThermalComfort";
  
  async function logout(){
    await logoutUser()
    console.log('Succesful logout');
    toast('You have logged out!')
    history.push('/home');
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
