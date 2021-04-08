import React from 'react';
import { RouteComponentProps } from 'react-router';
import "./LandingPage.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import { toast } from '../../toast'
import { useAuth } from "../../contexts/AuthContext";

const LandingPage: React.FC<RouteComponentProps> = ({history, location}) => {
  let appName = "CPTC";
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      toast(`Error logging out: ${error}`);
    }
  }

  function launchSurvey() {
    if (location.state) {
      history.push('/survey', location.state);
    }
  }

  function launchNotifications() {
    if (location.state) {
      history.push('/editNotifs', location.state);
    }
  }

  function launchProfile() {
    if (location.state) {
      history.push('/editProfile', location.state);
    }
  }

  return (
    <div className="landingpage-container">
      <MainMenu logout={handleLogout} />
      {(window.innerWidth > 800) && <div className="temp">
        Cool data visualisation coming soon!
      </div>}
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
