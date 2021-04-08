import React from 'react';
import './EditProfile.css';
import BaseButton from '../BaseButton/BaseButton'
import BaseInputField from '../BaseInputField/BaseInputField';
import BaseSelectOne from '../BaseSelectOne/BaseSelectOne';
import BaseSelectMultiple from '../BaseSelectMultiple/BaseSelectMultiple';
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { pushProfile, getProfile } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext'
import { toast } from '../../toast'


function EditProfile(props: any) {
  const { toggleState } = props;
  const { currentUser } = useAuth();
  
  const [calPolyStatus, setCalPolyStatus] = React.useState('');
  const [biologicalSex, setBiologicalSex] = React.useState('');
  const [genderIdentification, setGenderIdentification] = React.useState('');
  const [ethnicity, setEthnicity] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [age, setAge] = React.useState('');
  const [indoorThermalPreference, setIndoorThermalPreference] = React.useState('');
  const [response, setResponse] = React.useState('');

  React.useEffect(() => { //populate with current profile data if any
    getProfile(currentUser.email).then((document) => {
      if (document.exists) {
        const profileData = document.data();
        if (profileData) {
          setCalPolyStatus(profileData.calPolyStatus);
          setBiologicalSex(profileData.biologicalSex);
          setGenderIdentification(profileData.genderIdentification);
          setEthnicity(profileData.ethnicity);
          setDisability(profileData.disability);
          setAge(profileData.age);
          setEconomicSituation(profileData.economicSituation);
          setChildhoodClimate(profileData.childhoodClimate);
          setIndoorThermalPreference(profileData.indoorThermalPreference);
          setResponse(profileData.response);
        }
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  let canSubmit = true;
  let profileData: any = {};

  function postProfile() {
    if (currentUser) {
      calPolyStatus != '' ? profileData.calPolyStatus = calPolyStatus : canSubmit = false;
      biologicalSex != '' ? profileData.biologicalSex = biologicalSex : canSubmit = false;
      genderIdentification != '' ? profileData.genderIdentification = genderIdentification : canSubmit = false;
      ethnicity != '' ? profileData.ethnicity = ethnicity : canSubmit = false;
      disability != '' ? profileData.disability = disability : canSubmit = false;
      age != '' ? profileData.age = age : canSubmit = false;
      economicSituation != '' ? profileData.economicSituation = economicSituation : canSubmit = false;
      childhoodClimate != '' ? profileData.childhoodClimate = childhoodClimate : canSubmit = false;
      indoorThermalPreference != '' ? profileData.indoorThermalPreference = indoorThermalPreference : canSubmit = false;
      profileData.response = response;

      if(canSubmit){
        try {
          pushProfile(profileData, currentUser.email);
          toast(`Thank you! Profile edited successfully.`);
        }
        catch(error) {
          toast(`Error editing profile: ${error}`);
        }
        toggleState();
      }
      else {
        toast('Please answer all of the non-optional questions before submitting.');
      }
    }
  }

  const calPolyStatusList = [
    {id: 1, val: 'Student'},
    {id: 2, val: 'Faculty'},
  ]
  const biologicalSexList = [
    {id: 1, val: 'Male'},
    {id: 2, val: 'Female'},
    {id: 3, val: 'Intersex'},
    {id: 4, val: 'Prefer Not to Say'},
  ]
  const genderIdentificationList = [
    {id: 1, val: 'Male'},
    {id: 2, val: 'Female'},
    {id: 3, val: 'Non-binary/Genderqueer'},
    {id: 4, val: 'Gender Fluid'},
    {id: 5, val: 'Other'},
    {id: 6, val: 'Prefer Not to Say'},
  ]
  const ethnicityList = [
    {id: 1, val: 'African American'},
    {id: 2, val: 'Asian American'},
    {id: 3, val: 'European American / Caucasian'},
    {id: 4, val: 'Latinx'},
    {id: 5, val: 'Middle Eastern'},
    {id: 6, val: 'Native American'},
    {id: 7, val: 'Native Hawaiian/Pacific Islander'},
    {id: 8, val: 'Mixed Race [2/+ races]'},
    {id: 9, val: 'Prefer Not to Say'},
  ]
  const disabilityList = [
    {id: 1, val: 'Yes'},
    {id: 2, val: 'No'},
    {id: 3, val: 'Prefer Not to Say'},
  ]
  const economicSituationList = [
    {id: 1, val: 'High income: Very well off, never financial uncertainty'},
    {id: 2, val: 'Upper middle income: Well off, no financial uncertainty, significant savings including retirement'},
    {id: 3, val: 'Middle income: Moderate financial security, concern for bigger/unexpected items,living expenses covered, minimal savings'},
    {id: 4, val: 'Lower middle income: living expenses mostly paid, living paycheck to paycheck, no savings'},
    {id: 5, val: 'Low income: Unsure if all bills will be paid, food insecurity, may have been homeless at some point'},
    {id: 6, val: 'Prefer Not to Say'},
  ]
  const [economicSituation, setEconomicSituation] = React.useState('');

  const childhoodClimateList = [
    {id: 1, val: 'Mild summers and mild winters'},
    {id: 2, val: 'Hot summers and mild winters'},
    {id: 3, val: 'Mild summers and severe winters'},
    {id: 4, val: 'Hot summers and severe winters'},
  ]
  const [childhoodClimate, setChildhoodClimate] = React.useState('');

  const indoorThermalPreferenceList = [
    {id: 1, val: 'Very Cold'},
    {id: 2, val: 'Cold'},
    {id: 3, val: 'Cool'},
    {id: 4, val: 'Neutral / “Room Temperature”'},
    {id: 5, val: 'Warm'},
    {id: 6, val: 'Hot'},
    {id: 7, val: 'Very Hot'},
  ]

  return (
    <div className="editprofile-container">
      <div className="top-buttons">
            <SecondaryButton onClick={toggleState}>Back</SecondaryButton>
        </div>
      <h1>Edit Profile</h1>
      <p>What is your status at Cal Poly?</p>
      <BaseSelectOne
        optionsList={calPolyStatusList}
        value={calPolyStatus}
        onChange={(e: any) => setCalPolyStatus(e.target.value)}
      />
      <p>What biological sex were you assigned at birth?</p>
      <BaseSelectOne
        optionsList={biologicalSexList}
        value={biologicalSex}
        onChange={(e: any) => setBiologicalSex(e.target.value)}
      />
      <p>What is your gender identification?</p>
      <BaseSelectOne
        optionsList={genderIdentificationList}
        value={genderIdentification}
        onChange={(e: any) => setGenderIdentification(e.target.value)}
      />
      <p>What is your ethnicity?</p>
      <BaseSelectOne
        optionsList={ethnicityList}
        value={ethnicity}
        onChange={(e: any) => setEthnicity(e.target.value)}
      />
      <p>Do you have a disability?</p>
      <BaseSelectOne
        optionsList={disabilityList}
        value={disability}
        onChange={(e: any) => setDisability(e.target.value)}
      />
      <div className="baseinput-div">
        <BaseInputField
          label={'What is your age? (Ex: 19)'}
          iduser={'room'}
          width={'300px'}
          value={age}
          onChange={(e: any) => setAge(e.target.value)}
        />
      </div>
      <p>What is your family’s or was your childhood economic situation?</p>
      <BaseSelectOne
        optionsList={economicSituationList}
        value={economicSituation}
        onChange={(e: any) => setEconomicSituation(e.target.value)}
      />
      <p>What climate did you grow up in [ages 0-10]?</p>
      <BaseSelectOne
        optionsList={childhoodClimateList}
        value={childhoodClimate}
        onChange={(e: any) => setChildhoodClimate(e.target.value)}
      />
      <p>Indoor Room Condition Thermal Comfort Preference?</p>
      <BaseSelectOne
        optionsList={indoorThermalPreferenceList}
        value={indoorThermalPreference}
        onChange={(e: any) => setIndoorThermalPreference(e.target.value)}
      />
      <div className="baseinput-div">
        <BaseInputField
          label={'Do you feel that one of the questions did not have a suitable answer to represent you? If so please explain. (OPTIONAL)'}
          iduser={'room'}
          width={'300px'}
          value={response}
          onChange={(e: any) => setResponse(e.target.value)}
        />
      </div>
      <div className='editprofile-submit'>
        <BaseButton width={'300px'} onClick={postProfile}>Submit</BaseButton>
      </div>
    </div>
  )
};

export default EditProfile