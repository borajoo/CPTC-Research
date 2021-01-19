import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonItem, IonButton, IonLabel, IonInput }
  from '@ionic/react';
import React, { useState } from 'react';
import "../style/Survey.css";
import { resetPassword } from "../firebaseConfig"
import { RouteComponentProps } from 'react-router';

const ResetPassword: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState<string>();

  function postReset() {
    if (email) {
      resetPassword(email)
    }
    history.push({
      pathname: '/resetPasswordConfirmation',
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Forgot your password?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <IonItem>
              <IonLabel position="stacked"> Enter your email and we'll send you a password reset email.</IonLabel>
                <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton className="SubmitButton" onClick={postReset}>
              Submit
          </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;