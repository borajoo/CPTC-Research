import React, { useState } from 'react';
import './MenuHome.css';
import CP_logo_CMYK_grn from '../../assets/CP_logo_CMYK_grn.jpg';
import BaseButton from "../../components/BaseButton/BaseButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import InfoButton from "../../components/InfoButton/InfoButton";
import CloseButton from "../../components/CloseButton/CloseButton";
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paperLarge: {
    width: 400,
    color: "#124B35",
  },
  paperSmall: {
    width: window.innerWidth,
    color: "#124B35",
  },
});

function MenuHome(props:any) {
  const { toggleSurvey, toggleEditProfile, toggleEditNofitications, logout } = props;

  const [showDrawer, setShowDrawer] = React.useState(false);

  const classes = useStyles();

  return (
    <div className="menuhome-container">
        <div className="top-buttons">
            <SecondaryButton onClick={logout}>Log Out</SecondaryButton>
            <InfoButton onClick={() => setShowDrawer(true)} />
        </div>
        <Drawer
          classes={window.innerWidth > 800 ? {
            paper: classes.paperLarge,
          } : {
            paper: classes.paperSmall,
          }} 
          anchor={"left"} open={showDrawer} onClose={() => setShowDrawer(false)}
        >
          <div className="drawer-close">
            <CloseButton onClick={() => setShowDrawer(false)} />
          </div>
          <div className="drawer-title">About CPTC</div>
          <div className="drawer-info">
            Thermal comfort, defined by the American Society of Heating, refrigerating and Air-Conditioning Engineers (ASHRAE) as “the condition of mind that expresses satisfaction with the thermal environment and is assessed by subjective evaluation”. <b>The purpose of this research is to understand how thermal comfort is perceived by students in higher education to predict thermal comfort conditions that could improve student success and save energy</b>. The survey results of this research, alongside the collection of various room conditions on Cal Poly’s campus, will act as data to be evaluated and taken into consideration when drafting a correlation to student success and thermal comfort perception.
          </div>
        </Drawer>
        <img src={CP_logo_CMYK_grn} />
        <h1>Thermal Comfort</h1>
        <p>
            Too hot? Too cold? Just right?
            Tell us what you think!
        </p> 
        <BaseButton onClick={toggleSurvey} width={'300px'}>How does your room feel?</BaseButton>
        <div className="bottom-buttons" style={{height: '100px'}}>
            <BaseButton onClick={toggleEditProfile} width={'300px'}>Edit Profile</BaseButton>
            <BaseButton onClick={toggleEditNofitications} width={'300px'}>Edit Notifications</BaseButton>
        </div>
    </div>
  )
};

export default MenuHome