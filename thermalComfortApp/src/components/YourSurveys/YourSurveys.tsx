import React from 'react';
import './YourSurveys.css';
import SurveyCard from '../SurveyCard/SurveyCard'

function YourSurveys(props:any) {
  const { surveys } = props;

  return (
    <div className="surveys-container">
      {surveys.map((survey: firebase.firestore.DocumentData, index: number) => {
          return <SurveyCard survey={survey} key={index}/>;
      })}
    </div>
  )
};

export default YourSurveys