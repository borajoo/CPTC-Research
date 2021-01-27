import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonItem, IonButton }
    from '@ionic/react';
  import React from 'react';
  import "./ResetPasswordConfirmation.css";
  import { RouteComponentProps } from 'react-router';

  const ResetPasswordConfirmation: React.FC<RouteComponentProps> = ({history}) => {
    function launchHome() {
      history.push({
        pathname: '/',
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
              <IonCardTitle>Your password reset email has been sent.</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem lines="none">
                  <IonButton  onClick={launchHome} className="LandingButton">
                    Return to Home
                  </IonButton>
                </IonItem>
              </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };

  export default ResetPasswordConfirmation;