import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonModal } from '@ionic/react';
import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';
import { arrowBack } from 'ionicons/icons';
import { registerUser } from '../firebaseConfig';
import { toast } from '../toast';
import "../style/Login.css";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setpageNumber] = useState(1);

  let onDocumentLoadSuccess = ({ numPages } : any) => {
    setNumPages(numPages);
  }
  
  async function register(){
    setShowModal(true);
    //validation
    if(password !== cpassword){
      toast('Passwords do not match')
      return false;
    }
    
    const res = await registerUser(email, password)
    if (res){
      toast('Sucessful register')
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
        </IonButtons>
          <IonTitle>
            <h3 className="title">Register</h3>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="LoginCard">
          <IonCardHeader>
            <IonCardTitle>
              Register
            </IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                placeholder="Email"
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
            </IonItem>
              
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                type="password"
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
            </IonItem>
            
            <IonItem>
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput
              type="password"
              placeholder="Confirm Password?"
              onIonChange={(e: any) => setCPassword(e.target.value)}
              />
            </IonItem>

            <IonModal isOpen={showModal}>
            <Document
              file="consent_form_pdf.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
              <IonButton onClick={() => register()}>Accpet Terms and Register</IonButton> 
            </IonModal>
            
            <IonButton className="LoginButton" onClick={() => setShowModal(true)} routerLink="/registration">Register</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;



