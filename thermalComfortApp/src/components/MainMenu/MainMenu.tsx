import React, { useState } from 'react';
import './MainMenu.css';
import Survey from "../../components/Survey/Survey";
import MenuHome from "../../components/MenuHome/MenuHome";
import EditProfile from "../../components/EditProfile/EditProfile";
import EditNotifications from "../../components/EditNotifications/EditNotifications";

function MainMenu(props:any) {
    const { logout, setUpdateState, updateState } = props;

    const [showMenuHome, setShowMenuHome] = useState(true);
    const [showSurvey, setShowSurvey] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showEditNotifications, setShowEditNotifications] = useState(false);

  return (
    <div className="menu-container">
        {
            showSurvey &&
            <Survey
                toggleState={() => {
                    setShowSurvey(false);
                    setShowMenuHome(true);
                    setUpdateState(Math.random());
                }}
            />
        }
        {
            showMenuHome &&
            <MenuHome
                toggleSurvey={() => {
                    setShowMenuHome(false);
                    setShowSurvey(true);
                }} 
                toggleEditProfile={() => {
                    setShowMenuHome(false);
                    setShowEditProfile(true);
                }}
                toggleEditNofitications={() => {
                    setShowMenuHome(false);
                    setShowEditNotifications(true);
                }}
                logout={logout}
            />
        }
        {
            showEditProfile &&
            <EditProfile
                updateState={updateState}
                toggleState={() => {
                    setShowEditProfile(false);
                    setShowMenuHome(true);
                    setUpdateState(Math.random());
                }}
            />
        }
        {
            showEditNotifications &&
            <EditNotifications
                updateState={updateState}
                toggleState={() => {
                    setShowEditNotifications(false);
                    setShowMenuHome(true);
                    setUpdateState(Math.random());
                }}
            />
        }
    </div>
  )
};

export default MainMenu

 //   function launchNotifications() {
    //     if (location.state) {
    //       history.push('/editNotifs', location.state);
    //     }
    //   }
    
    //   function launchProfile() {
    //     if (location.state) {
    //       history.push('/editProfile', location.state);
    //     }
    //   }