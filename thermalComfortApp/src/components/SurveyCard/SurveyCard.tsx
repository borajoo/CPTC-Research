import React, { useState, useEffect } from 'react';
import './SurveyCard.css';
import { Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function SurveyCard(props:any) {
  const { survey } = props;

  console.log(survey.recentAction);

  return (
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="survey"
        >
          <p><i>{survey.timeStamp}</i></p>
          <p>Building: {survey.buildingNumber}, Room: {survey.roomNumber}</p>
        </AccordionSummary>
        <AccordionDetails className="details">
          <div className="details-row">
            <p><i>Room Temp</i></p><p>{survey.thermalSensation}</p>
          </div>
          <div className="details-row">
            <p><i>Temp Preference</i></p><p>{survey.thermalPreference}</p>
          </div>
          <div className="details-row">
            <p><i>Air Circulation</i></p><p>{survey.airCirculationSensation}</p>
          </div>
          <div className="details-row">
            <p><i>Humidity</i></p><p>{survey.humiditySensation}</p>
          </div>
          <div className="details-row">
            <p><i>Clothing</i></p><p>{survey.clothing}</p>
          </div>
          <div className="details-row">
            <p><i>Recent Action</i></p><p>{survey.recentAction.join(", ")}</p>
          </div>
          <div className="details-row">
            <p><i>Outside Temperature</i></p><p>{Math.round((parseInt(survey.temperature) - 273.15) * 1.8 + 32)}°F</p>
          </div>
          <div className="details-row">
            <p><i>Outside Humidity</i></p><p>{survey.humidity}%</p>
          </div>
          <div className="details-row">
            <p><i>Outside Wind Speed</i></p><p>{survey.windSpeed} m/s</p>
          </div>
        </AccordionDetails>
    </Accordion>
  )
};

export default SurveyCard