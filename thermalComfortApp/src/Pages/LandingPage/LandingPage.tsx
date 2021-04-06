import React from 'react';
import { RouteComponentProps } from 'react-router';
import "./LandingPage.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import { logoutUser } from '../../firebaseConfig'
import { toast } from '../../toast'

const LandingPage: React.FC<RouteComponentProps> = ({history, location}) => {

  async function logout(){
    await logoutUser();
    toast('You have logged out!');
    history.push({
      pathname: '/',
      state: {email: '', password: ''},
    });
  }

  return (
    <div className="landingpage-container">
      <MainMenu logout={logout} />
    </div>

    
                // <IonButton  onClick={launchSurvey} className="LandingButton">
                //     Take Survey
                // </IonButton>
                // </IonItem>

                // <IonItem lines="none">
                // <IonButton  onClick={launchNotifications} className="LandingButton">
                //     Edit Notifications
                // </IonButton>
                // </IonItem>

                // <IonItem lines="none">
                // <IonButton  onClick={launchProfile} className="LandingButton">
                //     Edit Profile
                // </IonButton>
                // </IonItem>

                // <IonItem lines="none">
                //     <IonButton onClick={logout} className="LandingButton">
                //         Logout
                //     </IonButton>
                // </IonItem>
  );
};

export default LandingPage;
