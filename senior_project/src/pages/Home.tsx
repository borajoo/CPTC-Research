import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonItem, IonList, IonButton, IonInput } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { loginUser, registerUser } from '../firebaseConfig'

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
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Email?"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={login}>Login</IonButton>
        <IonInput
          placeholder="Email?"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Confirm Password?"
          onIonChange={(e: any) => setCPassword(e.target.value)}
        />
        <IonButton onClick={register}>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
