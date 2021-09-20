import React, { useState } from 'react';
import './DataWindowNav.css';
import BaseButton from "../../components/BaseButton/BaseButton"; 

function DataWindowNav(props:any) {
  const { setShowYourSurveys, setShowData } = props;

  return (
    <div className="datanav-container">
        <BaseButton width={'200px'} fontSize={'18px'} onClick={() => {
          setShowYourSurveys(true);
          setShowData(false);
        }}>Your Surveys</BaseButton>
        <BaseButton width={'200px'} fontSize={'18px'} onClick={() => {
          setShowYourSurveys(false);
          setShowData(true);
        }}>Overall Survey Data</BaseButton>
    </div>
  )
};

export default DataWindowNav