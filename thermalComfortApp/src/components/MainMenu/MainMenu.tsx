import React, { useState } from 'react';
import './MainMenu.css';
import CP_logo_CMYK_grn from '../../assets/CP_logo_CMYK_grn.jpg';
import BaseButton from "../../components/BaseButton/BaseButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import InfoButton from "../../components/InfoButton/InfoButton";
import Survey from "../../components/Survey/Survey";

function MainMenu(props:any) {

    const [showSurvey, setShowSurvey] = useState(false);
    
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

  return (
    <div className="menu-container">
        {/* {showSurvey && <Survey />} */}
        <Survey />
        <div className="top-buttons">
            <SecondaryButton onClick={props.logout}>Log Out</SecondaryButton>
            <InfoButton />
        </div>
        <img src={CP_logo_CMYK_grn} />
        <h1>Thermal Comfort</h1>
        <p>
            Too hot? Too cold? Just right?
            Tell us what you think!
        </p>
        <BaseButton onClick={() => {setShowSurvey(true)}} width={'300px'}>How does your room feel?</BaseButton>
        <div className="bottom-buttons" style={{height: '100px'}}>
            <BaseButton onClick={props.logout} width={'300px'}>Edit Profile</BaseButton>
            <BaseButton onClick={props.logout} width={'300px'}>Edit Notifications</BaseButton>
        </div>
    </div>
  )
};

export default MainMenu