import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonSelect, IonSelectOption, IonRange } from '@ionic/react';
import React from 'react';
import "../style/Login.css";
import "../style/Survey.css";
import { RouteComponentProps } from 'react-router';
import DataTable from 'react-data-table-component';
import { pushData } from '../firebaseConfig';

const Table: React.FC<RouteComponentProps> = ({history, location}) => {

  const state: any = location.state;
    
    const data = [{
        id: 1, date: 'January 31, 2020 at 12:00:00 PM UTC-8', location: 'Building 1 Room 1',
        clothingLevel: '1', comfortLevel: '1',
        humidity: '1', metabolicRate: '1', operatingTemp: '1',
        propTemp: '1', vicinityPop: '1', user: 'test@sample.com'
    }];
    const columns = [
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Location',
            selector: 'location',
            sortable: true,
        },
        {
            name: 'Clothing Level',
            selector: 'clothingLevel',
            sortable: true,
        },
        {
            name: 'Comfort Level',
            selector: 'comfortLevel',
            sortable: true,
        },
        {
            name: 'Humidity',
            selector: 'humidity',
            sortable: true,
        },
        {
            name: 'Metabolic Rate',
            selector: 'metabolicRate',
            sortable: true,
        },
        {
            name: 'Operating Temperature',
            selector: 'operatingTemp',
            sortable: true,
        },
        {
            name: 'Proposed Temperature',
            selector: 'propTemp',
            sortable: true,
        },
        {
            name: 'Vicinity Population',
            selector: 'vicinityPop',
            sortable: true,
        },
        {
            name: 'User',
            selector: 'user',
            sortable: true,
            right: true,
        },
    ];

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Data Table</IonTitle>
      </IonToolbar>
    </IonHeader>
    <DataTable
       title="Temp Data"
       columns={columns}
       data={data}
    />
  </IonPage>
);
  
};

export default Table;
