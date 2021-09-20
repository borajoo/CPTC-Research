import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import "./Home.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import DataWindow from "../../components/DataWindow/DataWindow";
import { toast } from '../../toast'
import { useAuth } from "../../contexts/AuthContext";

const Home: React.FC<RouteComponentProps> = ({history, location}) => {
  const { logout } = useAuth();

  const [updateState, setUpdateState] = useState(0);

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      toast(`Error logging out: ${error}`);
    }
  }

  // function launchSurvey() {
  //   if (location.state) {
  //     history.push('/survey', location.state);
  //   }
  // }

  // function launchNotifications() {
  //   if (location.state) {
  //     history.push('/editNotifs', location.state);
  //   }
  // }

  // function launchProfile() {
  //   if (location.state) {
  //     history.push('/editProfile', location.state);
  //   }
  // }

  return (
    <div className="home-container">
      <MainMenu logout={handleLogout} setUpdateState={setUpdateState} updateState={updateState}/>
      {(window.innerWidth > 800) && <DataWindow updateState={updateState}/>}
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

export default Home;
