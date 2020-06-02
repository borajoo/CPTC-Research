import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
   IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonRow,
 IonCardTitle, IonLabel, IonGrid, IonCol, IonImg} from '@ionic/react';
   import React, { useState } from 'react';
   import { loginUser } from '../firebaseConfig';
   import "../style/info.css";
   import { RouteComponentProps } from 'react-router';
   import { toast } from '../toast';
   
   const WebInfo: React.FC<RouteComponentProps> = ({history}) => {     


   
     return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonTitle>Cal Poly Thermal Comfort</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent className="ion-padding">

         <IonGrid>
            <IonRow>
               <IonCol size="12">
                  <IonImg src={process.env.PUBLIC_URL + '/assets/featureGraphic.png'}></IonImg>
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol size="2">
               </IonCol>
               <IonCol size="8">
                  <h3 className="ion-text-center">Download the CPTC App on the Android and iOS App Stores.</h3>
               </IonCol>
               <IonCol size="2">
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol></IonCol>
               <IonCol size="4">
                  <IonImg  src={process.env.PUBLIC_URL + '/assets/appLogo.png'}>
                  </IonImg>
               </IonCol>
               <IonCol></IonCol>
               <IonCol size="4">
                  <IonImg style={{marginTop: "10%"}} src={process.env.PUBLIC_URL + '/assets/googleLogo.png'}>
                     <a href="https://play.google.com/store?hl=en_US"></a>   
                  </IonImg>
                  <IonImg src={process.env.PUBLIC_URL + '/assets/appleLogo.svg'}>
                     <a href="https://www.apple.com/ios/app-store/"></a>
                  </IonImg>
               </IonCol> 
               <IonCol></IonCol>
            </IonRow>

            <IonRow>
               <IonCol></IonCol>
               <IonCol size="6">
                  <IonButton id="termsButton" href="https://cptc-website.s3.us-east-2.amazonaws.com/consent_form_pdf.pdf" 
                  shape="round"
                  color=""
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