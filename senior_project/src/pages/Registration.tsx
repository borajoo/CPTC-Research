import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, 
IonBackButton, IonItem, IonButton, IonInput, IonCard, IonCardHeader, 
IonCardContent, IonCardTitle, IonLabel, IonCheckbox } from '@ionic/react';
import React, { useState } from 'react';
import { registerUser } from '../firebaseConfig';
import { toast } from '../toast';
import "../style/Login.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [terms, setTerms] = useState(false);
  
  let checkBox = (e: any) => {
    setTerms(e.detail.checked);
  };

  let validPassword = () => {
    if (password && password === cpassword)
      return true;
    else 
      return false;
  };
  async function register(){
    //validation
    if(password !== cpassword && password !== ''){
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
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
        </IonButtons>
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
            <IonItem>
              <IonCheckbox onIonChange={checkBox}></IonCheckbox>
              <IonLabel>
                <a href="https://cptc-website.s3.us-east-2.amazonaws.com/consent_form_pdf.pdf"> 
                Accept Terms and Conditions</a>
              </IonLabel>
            </IonItem>
            <IonButton className="LoginButton" onClick={() => register()} 
             disabled={!terms && !(validPassword())} 
             routerLink="/registration">
              Register</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;



