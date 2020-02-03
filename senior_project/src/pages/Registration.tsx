import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { registerUser } from '../firebaseConfig';
import "../style/Login.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  
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
        <IonCard className="LoginCard">
          <IonCardHeader>
            <IonCardTitle>
              Register
            </IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                placeholder="Email"
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
            </IonItem>
              
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                type="password"
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput
              type="password"
              placeholder="Confirm Password?"
              onIonChange={(e: any) => setCPassword(e.target.value)}
              />
            </IonItem>
            
            <IonButton className="LoginButton" onClick={register} routerLink="/registration">Register</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;



