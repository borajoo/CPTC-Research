import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonIcon } from '@ionic/react';
import React, { useState } from 'react'
import { arrowBack } from 'ionicons/icons'
import { registerUser } from '../firebaseConfig'
import { toast } from '../toast'
import "../style/Login.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  
  async function register(){
    //validation
    if(password !== cpassword){
      toast('Passwords do not match')
      return false;
    }
    
    const res = await registerUser(email, password)
    if (res){
      toast('Sucessful register')
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton className="backButton" size="small" routerLink="/home"> <IonIcon class="backArrow" icon={arrowBack}></IonIcon></IonButton>
          <IonTitle>
            <h3 className="title">Register</h3>
          </IonTitle>
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



