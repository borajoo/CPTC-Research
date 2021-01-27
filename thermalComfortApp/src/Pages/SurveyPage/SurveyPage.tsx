import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton,
IonItem, IonButtons, IonButton, IonInput, IonCard,
IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonSelect,
IonSelectOption } from '@ionic/react';
import React from 'react';
import "./SurveyPage.css";
import { RouteComponentProps } from 'react-router';
import { pushData } from '../../firebaseConfig';
var request = require('request');

const Survey: React.FC<RouteComponentProps> = ({history, location}) => {

    const state: any = location.state;

    let surveyData: any = {};

    const sensationOptions = [
        {
            id: 1,
            first: 'Cold',
        },
        {
            id: 2,
            first: 'Cool',
        },
        {
            id: 3,
            first: 'Slightly Cool',
        },
        {
            id: 4,
            first: 'Neutral',
        },
        {
            id: 5,
            first: 'Slightly Warm',
        },
        {
            id: 6,
            first: 'Warm',
        },
        {
            id: 7,
            first:  'Hot',
        },
    ];

    let breezy = ["Too breezy", "Slightly breezy", "Not breezy"];
    let breezyOptions = [];
    for (let i = 0; i < breezy.length; i++) {
        breezyOptions.push({id: i +1, first: breezy[i]});
    }

    let humiditySensation = ["Too dry", "Slightly dry", "Just right", "Slightly humid", "Too humid"];
    let humiditySensationOptions = [];
    for (let i = 0; i < humiditySensation.length; i++) {
        humiditySensationOptions.push({id: i+1, first: humiditySensation[i]});
    }

    let thermalPreference = ["Cooler", "No Change", "Warmer"];
    let thermalPreferenceOptions = [];
    for (let i = 0; i < thermalPreference.length; i++) {
        thermalPreferenceOptions.push({id: i+1, first: thermalPreference[i]});
    }

    let clothing = [
        "Short-sleeve shirt",
        "Long-sleeve shirt",
        "Shorts",
        "Long pants",
        "Short skirt",
        "Long skirt",
        "Sweatpants",
        "Long-sleeve sweatshirt",
        "Jacket",
        "Typical summer indoor clothing",
        "Typical winter indoor clothing"
    ];

    let clothingOptions = [];
    for (let i = 0 ; i < clothing.length; i++) {
        clothingOptions.push({id: i+1, first: clothing[i]});
    }

    let recentAction = [
        "Sitting",
        "Standing",
        "Walking",
        "Jogging",
        "Running",
    ];

    let recentActionOptions = [];
    for (let i = 0 ; i < recentAction.length; i++) {
        recentActionOptions.push({id: i+1, first: recentAction[i]});
    }

    function selectBuildingNumber(e:any) {
        surveyData.buildingNumber = e.detail.value;
    }

    function selectRoomNumber(e:any) {
        surveyData.roomNumber = e.detail.value;
    }

    function selectThermalSensation(e:any) {
        surveyData.thermalSensation = e.detail.value;
    }

    function selectThermalPreference(e:any) {
        surveyData.thermalPreference = e.detail.value;
    }

    function selectBreezy(e:any) {
        surveyData.breezy = e.detail.value;
    }

    function selectHumiditySensation(e:any) {
        surveyData.humiditySensation = e.detail.value;
    }

    function selectClothing(e:any) {
        surveyData.clothing = e.detail.value;
    }

    function selectRecentAction(e:any) {
        surveyData.recentAction = e.detail.value;
    }

    function postData() {
        if (state.uid) {
            pushData(surveyData, state.uid);
            history.push('/surveyComplete')
        }
    }

    function getWeatherData(e:any){
        let apiKey = 'a28b0237f94d95bbd08c26352f7c7bdb';
        let city = e.detail.value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        request(url, function (err:any, response:any, body:any) {
            if(err){
                return;
            } else {
              if (body.cod !== "404") {
                let weatherData = JSON.parse(body);
                if (weatherData.main) {
                    surveyData.temp = weatherData.main.temp;
                    surveyData.windspeed = weatherData.wind.speed;
                    surveyData.humidity = weatherData.main.humidity;
                }
              }
            }
          });
    }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/landingPage" />
        </IonButtons>
        <IonTitle>Survey</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
    <IonCard className="surveyCard">
        <IonCardHeader>
          <IonCardTitle>
            Thermal Questions
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
              <IonLabel position="stacked"> What building are you in?</IonLabel>
                <IonInput placeholder="Input number (i.e. 01)" inputmode="numeric" onIonChange= {e => selectBuildingNumber(e)}></IonInput>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked"> What room are you in? </IonLabel>
                <IonInput placeholder="Input number (i.e. 0123)" inputmode="numeric" onIonChange= {e => selectRoomNumber(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked" className="questionLabel">How does the temperature feel? </IonLabel>
            <IonSelect className="questionSelect" placeholder="Select one" onIonChange={e => selectThermalSensation(e)}>
            {sensationOptions.map((object, i) => {
                return (
                <IonSelectOption  onSelect={selectThermalSensation} key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked"> How would you prefer the temperature to feel? </IonLabel>
            <IonSelect placeholder="Select one" onIonChange={e => selectThermalPreference(e)}>
            {thermalPreferenceOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked" className="surveyLabel"> How breezy does it feel? </IonLabel>
            <IonSelect placeholder="Select one" onIonChange={e => selectBreezy(e)}>
            {breezyOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked" className="surveyLabel"> How humid do you feel? </IonLabel>
            <IonSelect placeholder="Select one" onIonChange={e => selectHumiditySensation(e)}>
            {humiditySensationOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked"> What clothing are you wearing? </IonLabel>
            <IonSelect multiple={true} placeholder="Select all that apply" onIonChange={e => selectClothing(e)}>
            {clothingOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked"> What activities have you performed in the last 10 minutes?</IonLabel>
            <IonSelect multiple={true} placeholder="Select all that apply" onIonChange={e => selectRecentAction(e)}>
            {recentActionOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          </IonCardContent>
          <IonButton className="SubmitButton" onClick={postData}>
              Submit
          </IonButton>

      </IonCard>
    </IonContent>
  </IonPage>
);

};

export default Survey;