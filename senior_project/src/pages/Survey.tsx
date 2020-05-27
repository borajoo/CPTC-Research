import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonItem, IonButtons, IonIcon, IonNote, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonSelect, IonSelectOption, IonRange } from '@ionic/react';
import React from 'react';
import "../style/Login.css";
import "../style/Survey.css";
import { RouteComponentProps } from 'react-router';
import { pushData } from '../firebaseConfig';
var request = require('request');


const Survey: React.FC<RouteComponentProps> = ({history, location}) => {


    const state: any = location.state;
    
    let dataPoint:any = {
        thermalSensation: '',
        uid: state.uid,
        temp: 0,
        humidiy: 0,
        windspeed: 0,
    };
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

    let thermalComfort = ["Much too cold", "Too cold", "OK (cool)", "OK (Just right)", "OK(warm)", "Too warm", "Much too warm"];
    let thermalComfortOptions = [];
    for (let i = 0; i < thermalComfort.length; i++) {
        thermalComfortOptions.push({id: i+1, first: thermalComfort[i]});
    }

    let airVelocity = ["Still", "Just right", "Breezy"];
    let airVelocityOptions = [];
    for (let i = 0; i < airVelocity.length; i++) {
        airVelocityOptions.push({id: i +1, first: airVelocity[i]});
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

    let acceptability = ["Acceptable", "Not Acceptable"];
    let acceptabilityOptions = [];
    for (let i = 0; i < acceptability.length; i++) {
        acceptabilityOptions.push({id:i+1, first: acceptability[i]});
    }

    let clothingLevel = [
        "Walking short, short sleeves shirt", 
        "Typical summer indoor clothing", 
        "Knee-length skirt, short-sleeve shirt, sandals, underwear",
        "Trousers, short-sleeve shirt, socks, shoes, underwear",
        "Trousers, long-sleeve shirt",
        "Knee-length skirt, long-sleeve shirt, full slip",
        "Sweatpants, long-sleeve sweatshirt",
        "Jacket, trousers, long-sleeve shirt",
        "Typical winter indoor clothing"
    ];    
    let clothingLevelOptions = [];
    for (let i = 0 ; i < clothingLevel.length; i++) {
        clothingLevelOptions.push({id: i+1, first: clothingLevel[i]});
    }

    let recentAction = [
        "Seated, quiet",
        "Standing relaxed",
        "Walking 2mph",
        "Walking 3mph",
        "Walking 4mph",
    ];
    let recentActionOptions = [];
    for (let i = 0 ; i < recentAction.length; i++) {
        recentActionOptions.push({id: i+1, first: recentAction[i]});
    }

    function selectThermalSensation(e:any) {
        dataPoint.thermalSensation = e.detail.value;
    }
    
    function selectThermalComfort(e:any) {
        dataPoint.thermalComfort = e.detail.value;
    }

    function selectAirVelocity(e:any) {
        dataPoint.airVelocity = e.detail.value;
    }

    function selectHumiditySensation(e:any) {
        dataPoint.humiditySensation = e.detail.value;
    }

    function selectThermalPreference(e:any) {
        dataPoint.thermalPreference = e.detail.value;
    }

    function selectAcceptability(e:any) {
        dataPoint.acceptability = e.detail.value/10.0;
        if (dataPoint.acceptability == 0.0) {
            dataPoint.acceptability = -0.1;
        }
    }

    function selectRecentAction(e:any) {
        dataPoint.recentAction = e.detail.value;
    }

    function selectClothingLevel(e:any) {
        dataPoint.clothingLevel = e.detail.value;
    }

    function  postData() {
        if (state.uid) {
            pushData(dataPoint, state.uid);
            history.push('/landingPage')
        }
    }

    function selectBuildingNumber(e:any) {
        dataPoint.buildingNumber = e.detail.value;
    }

    function selectRoomNumber(e:any) {
        dataPoint.roomNumber = e.detail.value;
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
                    dataPoint.temp = weatherData.main.temp;
                    dataPoint.windspeed = weatherData.wind.speed; 
                    dataPoint.humidity = weatherData.main.humidity;
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
            <IonLabel position="stacked" className="questionLabel">What is your Thermal Sensation? </IonLabel>
            <IonSelect className="questionSelect" placeholder="Select One" onIonChange={e => selectThermalSensation(e)}>
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
              <IonLabel position="stacked"> What is your Thermal Comfort Level? </IonLabel>
            <IonSelect placeholder="Select One" onIonChange={e => selectThermalComfort(e)}>
            {thermalComfortOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked" className="surveyLabel"> What is the Air Velocity? </IonLabel>
            <IonSelect placeholder="Select One" onIonChange={e => selectAirVelocity(e)}>
            {airVelocityOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked" className="surveyLabel"> What is the Humidity Sensation? </IonLabel>
            <IonSelect placeholder="Select One" onIonChange={e => selectHumiditySensation(e)}>
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
              <IonLabel position="stacked"> What is your Thermal Preference? </IonLabel>
            <IonSelect placeholder="Select One" onIonChange={e => selectThermalPreference(e)}>
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
              <IonLabel position="stacked"> What is your Clothing Level? </IonLabel>
            <IonSelect placeholder="Select One" onIonChange={e => selectClothingLevel(e)}>
            {clothingLevelOptions.map((object, i) => {
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
            <IonSelect multiple={true} placeholder="Select One" onIonChange={e => selectRecentAction(e)}>
            {recentActionOptions.map((object, i) => {
                return (
                <IonSelectOption key={i} value={object.first}>
                    {object.first}
                </IonSelectOption>
                );
            })}
            </IonSelect>
          </IonItem>

          <IonItem lines="none">
            <IonNote slot="start" className="sliderLabelLeft"> The thermal sensation is very unacceptable</IonNote>
            <IonNote slot="end" className="sliderLabelRight"> The thermal sensation is very acceptable</IonNote>
          </IonItem>
          
          <IonItem>
            <IonRange min={-30} max={30} color="secondary" onIonChange= { e => selectAcceptability(e)}></IonRange>
          </IonItem>
          

          <IonItem>
              <IonLabel position="stacked"> What building are you in?</IonLabel>
                <IonInput inputmode="numeric" onIonChange= {e => selectBuildingNumber(e)}></IonInput>
          </IonItem>

          <IonItem>
              <IonLabel position="stacked"> What room are you in? </IonLabel>
                <IonInput inputmode="numeric" onIonChange= {e => selectRoomNumber(e)}></IonInput>
          </IonItem>
        
          <IonItem>
              <IonLabel position="stacked"> What city are you in? </IonLabel>
              <IonInput inputmode="numeric" onIonChange= {e => getWeatherData(e)}> </IonInput>
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