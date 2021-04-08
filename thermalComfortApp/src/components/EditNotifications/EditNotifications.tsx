import React from 'react';
import './EditNotifications.css';
import BaseButton from '../BaseButton/BaseButton'
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import BaseCheckbox from "../../components/BaseCheckbox/BaseCheckbox";
import FormGroup from "@material-ui/core/FormGroup";
import { pushNotifs, getNotifs } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext'
import { toast } from '../../toast'

function EditNotifications(props: any) {
  const { toggleState } = props;
  const { currentUser } = useAuth();

  const [state, setState] = React.useState({
    eightAm: false,
    nineAm: false,
    tenAm: false,
    elevenAm: false,
    twelvePm: false,
    onePm: false,
    twoPm: false,
    threePm: false,
    fourPm: false,
    fivePm: false,
    sixPm: false,
    sevenPm: false,
    eightPm: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => { //populate with current notification data if any
    getNotifs(currentUser.email).then((document) => {
      if (document.exists) {
        const notifsData = document.data();
        if (notifsData) {
          const stateData = {
            eightAm: notifsData.eightAm,
            nineAm: notifsData.nineAm,
            tenAm: notifsData.tenAm,
            elevenAm: notifsData.elevenAm,
            twelvePm: notifsData.twelvePm,
            onePm: notifsData.onePm,
            twoPm: notifsData.twoPm,
            threePm: notifsData.threePm,
            fourPm: notifsData.fourPm,
            fivePm: notifsData.fivePm,
            sixPm: notifsData.sixPm,
            sevenPm: notifsData.sevenPm,
            eightPm: notifsData.eightPm
          }
          setState(stateData);
        }
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  function postNotifs() {
    if (currentUser) {
      try {
        pushNotifs(state, currentUser.email);
        toast(`Thank you! Notifications edited successfully.`);
      }
      catch(error) {
        toast(`Error editing notifications: ${error}`);
      }
      toggleState();
    }
  }

  return (
    <div className="editnotifs-container">
      <div className="top-buttons">
            <SecondaryButton onClick={toggleState}>Back</SecondaryButton>
        </div>
      <h1>Edit Notifications</h1>
      <h3>Please select times to be notified to take the survey</h3>
      <FormGroup>
        <BaseCheckbox checked={state.eightAm} onChange={handleChange} name="eightAm" label="8:00 AM" />
        <BaseCheckbox checked={state.nineAm} onChange={handleChange} name="nineAm" label="9:00 AM" />
        <BaseCheckbox checked={state.tenAm} onChange={handleChange} name="tenAm" label="10:00 AM" />
        <BaseCheckbox checked={state.elevenAm} onChange={handleChange} name="elevenAm" label="11:00 AM" />
        <BaseCheckbox checked={state.twelvePm} onChange={handleChange} name="twelvePm" label="12:00 PM" />
        <BaseCheckbox checked={state.onePm} onChange={handleChange} name="onePm" label="1:00 PM" />
        <BaseCheckbox checked={state.twoPm} onChange={handleChange} name="twoPm" label="2:00 PM" />
        <BaseCheckbox checked={state.threePm} onChange={handleChange} name="threePm" label="3:00 PM" />
        <BaseCheckbox checked={state.fourPm} onChange={handleChange} name="fourPm" label="4:00 PM" />
        <BaseCheckbox checked={state.fivePm} onChange={handleChange} name="fivePm" label="5:00 PM" />
        <BaseCheckbox checked={state.sixPm} onChange={handleChange} name="sixPm" label="6:00 PM" />
        <BaseCheckbox checked={state.sevenPm} onChange={handleChange} name="sevenPm" label="7:00 PM" />
        <BaseCheckbox checked={state.eightPm} onChange={handleChange} name="eightPm" label="8:00 PM" />
      </FormGroup>
      <div className='editprofile-submit'>
        <BaseButton width={'300px'} onClick={postNotifs}>Submit</BaseButton>
      </div>
    </div>
  )
};

export default EditNotifications