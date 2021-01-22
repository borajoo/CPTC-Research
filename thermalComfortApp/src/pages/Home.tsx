import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonButton, IonInput, IonCard, IonCardHeader,
  IonCardContent, IonCardTitle, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { loginUser } from '../firebaseConfig';
import "../style/Login.css";
import { RouteComponentProps } from 'react-router';
import { toast } from '../toast';

const Home: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    const res = await loginUser(email, password);

    if (res && res.user) {
      setPassword("");
      setEmail("");
      history.push({
        pathname: 'landingPage',
        state: { uid: res.user.uid},
      });

    } else {
      toast('Error logging in with your credentials');
    }
  }

  function goResetPassword() {
    history.push({
      pathname: '/resetPassword',
    });
  }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cal Poly Thermal Comfort</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">

    <IonCard className="LoginCard">
        <IonCardHeader>
          <IonCardTitle>
            Login
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>

          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              placeholder="Email"
              value={email}
              onIonChange={(e: any) => setEmail(e.target.value)}
            />
          </IonItem>
          

          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              placeholder="Password"
              value={password}
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
          </IonItem>
            <IonLabel><a href="/resetPassword">Forgot password?</a></IonLabel>
            <IonButton className="LoginButton" onClick={login}>
              Login
            </IonButton>
            <IonButton className="LoginButton" routerLink="/registration/">
              Register
            </IonButton>
          </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

};

export default Home;