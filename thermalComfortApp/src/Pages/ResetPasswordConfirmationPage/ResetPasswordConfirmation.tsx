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
      <div className="login-page-container">
        <div className="login-container">
          <div className="login-subtitle">
            Confirmation
          </div>
          <div className="body-text">
          Your password reset email has been sent! Check your email to finish resetting your password.          </div>
          <a className="return-login" href="/">Return to Login</a>
        </div>
      </div>
    );
  };

  export default ResetPasswordConfirmation;