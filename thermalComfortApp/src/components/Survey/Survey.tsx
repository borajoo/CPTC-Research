import React from 'react';
import './Survey.css';
import BaseButton from '../BaseButton/BaseButton'
import BaseInputField from '../BaseInputField/BaseInputField';
import BaseSelectOne from '../BaseSelectOne/BaseSelectOne';
import BaseSelectMultiple from '../BaseSelectMultiple/BaseSelectMultiple';


function Survey() {
  const tempInRoomList = [
    {id: 1, val: 'Cold'},
    {id: 2, val: 'Cool'},
    {id: 3, val: 'Slightly Cool'},
    {id: 4, val: 'Neutral: Neither Cool or Warm'},
    {id: 5, val: 'Slightly Warm'},
    {id: 6, val: 'Warm'},
    {id: 7, val: 'Hot'},
  ]
  const [tempInRoom, setTempInRoom] = React.useState('');

  const preferFeelList = [
    {id: 1, val: 'Cooler'},
    {id: 2, val: 'No Change'},
    {id: 3, val: 'Warmer'},
  ]
  const [preferFeel, setPreferFeel] = React.useState('');

  const airCirculationList = [
    {id: 1, val: 'Cooler'},
    {id: 2, val: 'No Change'},
    {id: 3, val: 'Warmer'},
  ]
  const [airCirculation, setAirCirculation] = React.useState('');

  const humidList = [
    {id: 1, val: 'Too Dry'},
    {id: 2, val: 'Slightly Dry'},
    {id: 3, val: 'Just Right'},
    {id: 4, val: 'Slightly Humid'},
    {id: 5, val: 'Too Humid'},
  ]
  const [humid, setHumid] = React.useState('');

  const clothingList = [
    {id: 1, val: 'Minimal [shorts, shirt]'},
    {id: 2, val: 'Average [pants, shirt]'},
    {id: 3, val: 'Heavy [pants, jacket/sweater/sweatshirt]'},
  ]
  const [clothing, setClothing] = React.useState('');

  const activitiesList = [
    {id: 1, val: 'Sitting'},
    {id: 2, val: 'Standing'},
    {id: 3, val: 'Walking'},
    {id: 4, val: 'Jogging/Fast Walking'},
    {id: 5, val: 'Running'},
    {id: 6, val: 'Other'},
  ]
  const [activities, setActivities] = React.useState([]);

  return (
    <div className="survey-container">
      <h1>Survey</h1>

      <div className="baseinput-div">
        <BaseInputField
          label={'What building are you in?'}
          iduser={'building'}
          width={'300px'}
        />
      </div>
      <div className="baseinput-div">
        <BaseInputField
          label={'What room are you in?'}
          iduser={'room'}
          width={'300px'}
        />
      </div>

      <p>How does the temperature feel in the room?</p>
      <BaseSelectOne
        optionsList={tempInRoomList}
        value={tempInRoom}
        onChange={(e: any) => setTempInRoom(e.target.value)}
      />

      <p>How would you prefer for it to feel?</p>
      <BaseSelectOne
        optionsList={preferFeelList}
        value={preferFeel}
        onChange={(e: any) => setPreferFeel(e.target.value)}
      />

      <p>How do you feel about the air circulation in the room?</p>
      <BaseSelectOne
        optionsList={airCirculationList}
        value={airCirculation}
        onChange={(e: any) => setAirCirculation(e.target.value)}
      />
      
      <p>How humid does the room feel?</p>
      <BaseSelectOne
        optionsList={humidList}
        value={humid}
        onChange={(e: any) => setHumid(e.target.value)}
      />

      <p>What clothing layers are you wearing?</p>
      <BaseSelectOne
        optionsList={clothingList}
        value={clothing}
        onChange={(e: any) => setClothing(e.target.value)}
      />

      <p>What activities have you done in the past 10-20 minutes?</p>
      <BaseSelectMultiple
        optionsList={activitiesList}
        value={activities}
        onChange={(e: any) => setActivities(e.target.value)}
      />

      <div className='survey-submit'>
        <BaseButton width={'300px'}>Submit</BaseButton>
      </div>
    </div>
  )
};

export default Survey