import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Registration from './pages/Registration';
import LandingPage from './pages/LandingPage';
import Survey from './pages/Survey';
import Table from './pages/Table';
import WebInfo from './pages/WebInfo';
import EditNotifications from './pages/EditNotifications';
import SurveyComplete from './pages/SurveyComplete';
import EditProfile from './pages/EditProfile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/info" component={WebInfo} exact={true} />
        <Route path="/" component={Home} exact={true} />
        <Route path="/registration" component={Registration} exact={true} />
        <Route path="/landingPage" component={LandingPage} exact={true} />
        <Route path="/survey" component={Survey} exact={true} />
        <Route path="/data" component={Table} exact={true} />
        <Route path="/surveyComplete" component={SurveyComplete} exact={true} />
        <Route path="/editNotifs" component={EditNotifications} exact={true} />
        <Route path="/editProfile" component={EditProfile} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
