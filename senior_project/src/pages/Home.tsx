import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonItem, IonList, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonNav, IonIcon } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { loginUser, registerUser } from '../firebaseConfig';
import "../style/Login.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  async function login() {
    const res = await loginUser(email, password)
    if (res){
      console.log('Succesful login')
    }
  }
  
  async function register(){
    //validation
    if(password !== cpassword){
      console.log('Passwords do not match')
    }
    
    const res = await registerUser(email, password)
    if (res){
      console.log('Sucessful register')
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
                placeholder="Email?"
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                type="password"
                placeholder="Password?"
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
            </IonItem>
            <IonButton className="LoginButton" onClick={login}>Login</IonButton>
            <IonButton className="LoginButton" routerLink="/registration/">New User? Register</IonButton>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
