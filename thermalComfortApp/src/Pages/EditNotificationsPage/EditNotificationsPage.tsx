import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList,
  IonItem, IonLabel, IonCard, IonCardContent, IonButton }
  from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import "./EditNotificationsPage.css";
import { pushNotifs } from '../../firebaseConfig';
import { toast } from '../../toast';

let notifData: any = {
  eightAm: true,
  nineAm: true,
  tenAm: true,
  elevenAm: true,
  twelvePm: true,
  onePm: true,
  twoPm: true,
  threePm: true,
  fourPm: true,
  fivePm: true,
  sixPm: true,
  sevenPm: true,
  eightPm: true,
};

const EditNotifications: React.FC<RouteComponentProps> = ({history, location}) => {
  const state: any = location.state;

  function selectEightAm(e:any) {
    notifData.eightAm = e.detail.checked;
  }

  function selectNineAm(e:any) {
    notifData.nineAm = e.detail.checked;
  }

  function selectTenAm(e:any) {
    notifData.tenAm = e.detail.checked;
  }

  function selectElevenAm(e:any) {
    notifData.elevenAm = e.detail.checked;
  }

  function selectTwelvePm(e:any) {
    notifData.twelvePm = e.detail.checked;
  }

  function selectOnePm(e:any) {
    notifData.onePm = e.detail.checked;
  }

  function selectTwoPm(e:any) {
    notifData.twoPm = e.detail.checked;
  }

  function selectThreePm(e:any) {
    notifData.threePm = e.detail.checked;
  }

  function selectFourPm(e:any) {
    notifData.fourPm = e.detail.checked;
  }

  function selectFivePm(e:any) {
    notifData.fivePm = e.detail.checked;
  }

  function selectSixPm(e:any) {
    notifData.sixPm = e.detail.checked;
  }

  function selectSevenPm(e:any) {
    notifData.sevenPm = e.detail.checked;
  }

  function selectEightPm(e:any) {
    notifData.eightPm = e.detail.checked;
  }

  function launchHome() {
    pushNotifs(notifData, state.uid)

    history.push({
      pathname: '/landingPage',
    });
    toast("You're all set! You may now take the survey.");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
      <IonList>
        <IonCard className="Card">
          <IonCardContent>
          <IonTitle>Please select times to be notified to take the survey</IonTitle>
            <IonItem>
              <IonLabel>8:00 AM</IonLabel>
              <IonCheckbox slot="start" value="8:00 AM" checked={true} onIonChange={e=> selectEightAm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>9:00 AM</IonLabel>
              <IonCheckbox slot="start" value="9:00 AM" checked={true} onIonChange={e=> selectNineAm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>10:00 AM</IonLabel>
              <IonCheckbox slot="start" value="10:00 AM" checked={true} onIonChange={e=> selectTenAm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>11:00 AM</IonLabel>
              <IonCheckbox slot="start" value="11:00 AM" checked={true} onIonChange={e=> selectElevenAm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>12:00 PM</IonLabel>
              <IonCheckbox slot="start" value="12:00 PM" checked={true} onIonChange={e=> selectTwelvePm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>1:00 PM</IonLabel>
              <IonCheckbox slot="start" value="1:00 PM" checked={true} onIonChange={e=> selectOnePm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>2:00 PM</IonLabel>
              <IonCheckbox slot="start" value="2:00 PM" checked={true} onIonChange={e=> selectTwoPm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>3:00 PM</IonLabel>
              <IonCheckbox slot="start" value="3:00 PM" checked={true} onIonChange={e=> selectThreePm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>4:00 PM</IonLabel>
              <IonCheckbox slot="start" value="4:00 PM" checked={true} onIonChange={e=> selectFourPm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>5:00 PM</IonLabel>
              <IonCheckbox slot="start" value="5:00 PM" checked={true} onIonChange={e=> selectFivePm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>6:00 PM</IonLabel>
              <IonCheckbox slot="start" value="6:00 PM" checked={true} onIonChange={e=> selectSixPm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>7:00 PM</IonLabel>
              <IonCheckbox slot="start" value="7:00 PM" checked={true} onIonChange={e=> selectSevenPm(e)} />
            </IonItem>
            <IonItem>
              <IonLabel>8:00 PM</IonLabel>
              <IonCheckbox slot="start" value="8:00 PM" checked={true} onIonChange={e=> selectEightPm(e)} />
            </IonItem>
            <IonItem lines="none">
            <IonButton onClick={launchHome} className="LandingButton">
              Submit
              </IonButton>
              </IonItem>
            </IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EditNotifications;
