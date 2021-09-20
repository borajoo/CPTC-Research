import React, { useState, useEffect } from 'react';
import { getSurveys } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext'
import './DataWindow.css';
import DataWindowNav from '../DataWindowNav/DataWindowNav'
import YourSurveys from '../YourSurveys/YourSurveys'

function DataWindow(props:any) {
  const { updateState } = props;
  const { currentUser } = useAuth();

  const [showData, setShowData] = useState(false);
  const [showYourSurveys, setShowYourSurveys] = useState(true);
  const [surveys, setSurveys] = useState<firebase.firestore.DocumentData[]>([]);

  useEffect(() => {
    getSurveys(currentUser.email).then((collection) => {
      const data:firebase.firestore.DocumentData[] = [];
      collection.forEach(doc => {
        data.push(doc.data())
      })
      setSurveys(data.sort((a, b) => a.timeStamp > b.timeStamp ? 1 : -1));
    }).catch((error) => {
      console.error(error);
    });
  }, [updateState, showData])

  return (
    <div className="data-container">
        <DataWindowNav setShowData={setShowData} setShowYourSurveys={setShowYourSurveys}/>
        {showYourSurveys && <YourSurveys surveys={surveys}/>}
        {/* {showData && <EditNotifications toggleState={() => {
            setShowEditNotifications(false);
            setShowMenuHome(true);
        }}/>} */}
    </div>
  )
};

export default DataWindow