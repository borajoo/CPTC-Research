import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButtons, IonBackButton, IonButton, IonLabel, IonCard, IonCardContent, IonDatetime } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import "../style/Notifications.css";

const Notifications: React.FC<RouteComponentProps> = ({history, location}) => {
    
    let notification1 :string;
    let notification2: string;
  
    function back() {
        if (location.state) {
        history.push('/home');
        }
    }

    function updateNotifcation(e:any, i:number) {
        if (i == 1) {
            notification1 = e.value;
        } else {
            notification2 = e.value;
        }
    }

    function postNotifications() {
        // pushing notification1 and notification2 to firebase...
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/landingPage" />
          </IonButtons>
          <IonTitle>Edit Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard className="LandingCard">
            <IonCardContent>
                <IonItem lines="none"> 
                    <IonLabel class="label" slot="start">Notification 1</IonLabel>
                    <IonDatetime className="dateTimeSelector" displayFormat="h:mm a" placeholder="Select Date" onIonChange={e => updateNotifcation(e, 1)} slot="end"></IonDatetime>
                </IonItem>

                <IonItem lines="none"> 
                    <IonLabel class="label" slot="start">Notification 2</IonLabel>
                    <IonDatetime className="dateTimeSelector" displayFormat="h:mm  a" placeholder="Select Date" onIonChange={e => updateNotifcation(e, 2)} slot="end"></IonDatetime>
                </IonItem>

                
                <IonButton className="button" onClick={postNotifications}>
                    Update
                </IonButton>
              
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
