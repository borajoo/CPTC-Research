import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
   IonButton, IonRow,IonGrid, IonCol, IonImg, IonButtons} from '@ionic/react';
import React from 'react';
import "../style/info.css";
import { RouteComponentProps } from 'react-router';

const WebInfo: React.FC<RouteComponentProps> = ({history}) => {

   return (
   <IonPage>
      <IonHeader>
      <IonToolbar>
         <IonTitle>Cal Poly Thermal Comfort</IonTitle>
         <IonButtons slot="end">
            <IonButton size="large" fill="outline" style={{width: "90px"}}
            onClick={() => history.push("/")}>
               Sign In
            </IonButton>
         </IonButtons>
      </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid>
         <IonRow>
            <IonCol size="12">
               <IonImg
                src={process.env.PUBLIC_URL + '/assets/featureGraphic.png'}>
               </IonImg>
            </IonCol>
         </IonRow>

         <IonRow>
            <IonCol></IonCol>
            <IonCol size="7">
               <div style={{textAlign: "center"}}>
                  <h4>
                  Are you tired of dripping flushed face Wednesday afternoons?
                  <br></br>
                  Help us discover a Cal Poly campus where back sweat and
                  goosebumps are a thing of the past!
                  <br></br>
                  Click below to download our <strong>cool</strong> app.
                  <br></br>
                  </h4>
               </div>

            </IonCol>
            <IonCol></IonCol>
         </IonRow>
         <IonRow>
            <IonCol></IonCol>
            <IonCol size="4">
                  <a href="https://play.google.com/store/apps/details?id=io.ionic.cptc">
                     <IonImg
                      src={process.env.PUBLIC_URL + '/assets/playStoreLogo.png'}
                      style={{marginTop: "15%", height: "60%"}}>
                     </IonImg>
                     <IonImg
                      style={{marginTop: "7%", width: "115%", marginLeft: "-7%"}}
                      src={process.env.PUBLIC_URL + '/assets/googleLogo.png'}>
                     </IonImg>
                  </a>
            </IonCol>
            <IonCol></IonCol>
            <IonCol size="4">
                  <a href="https://apps.apple.com/us/app/cal-poly-thermal-comfort/id1514435694?ls=1">
                     <IonImg
                      src={process.env.PUBLIC_URL + '/assets/appStoreLogo.png'}
                      style={{marginTop: "15%", height: "60%"}}>
                     </IonImg>
                     <IonImg
                      style={{marginTop: "14%"}}
                      src={process.env.PUBLIC_URL + '/assets/appleLogo.svg'}>
                     </IonImg>
                  </a>
            </IonCol>
            <IonCol></IonCol>
         </IonRow>

         <IonRow>
            <IonCol></IonCol>
            <IonCol size="6">
               <IonButton id="termsButton" href="https://cptc-website.s3.us-east-2.amazonaws.com/consent_form_pdf.pdf"
               shape="round"
               fill="outline">See Terms & Conditions</IonButton>
            </IonCol>
            <IonCol></IonCol>
         </IonRow>
      </IonGrid>
      </IonContent>
   </IonPage>
   );

};

export default WebInfo;