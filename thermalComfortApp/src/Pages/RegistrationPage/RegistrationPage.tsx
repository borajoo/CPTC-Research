import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonItem, IonButton, IonInput, IonCard, IonCardHeader,
  IonCardContent, IonCardTitle, IonLabel, IonCheckbox } from '@ionic/react';
import React, { useState } from 'react';
import { registerUser } from '../../firebaseConfig';
import { toast } from '../../toast';
import "./RegistrationPage.css";
import { RouteComponentProps } from 'react-router';
import { useAuth } from "../../contexts/AuthContext";

const Home: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const { signup } = useAuth();

  let checkBox = (e: any) => {
    setTerms(e.detail.checked);
  };

  let validPassword = () => {
    if (password && password === cpassword)
      return true;
    else
      return false;
  };

  async function handleRegister() {
    try {
      if (!validPassword()) {
        toast("Passwords do not match");
        return;
      }
      await signup(email, password);
      toast("Registration successful!");
      history.push("/");
    } catch (error) {
      toast(`Error registering: ${error}`);
    }
  }

  /*
  async function register() {
    //validation
    if(password !== cpassword && password !== '') {
      toast('Passwords do not match');
      return false;
    } else {
      const res = await registerUser(email, password)
      if (res) {
        toast('Sucessful register');
        history.push({
          pathname: '/',
        });
      }
    }
  }
  */

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

            <IonItem>
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput
              type="password"
              placeholder="Confirm Password"
              value={cpassword}
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
            <IonButton className="LoginButton" onClick={() => handleRegister()}
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



