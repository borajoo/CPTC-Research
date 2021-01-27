import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Pages/HomePage/HomePage';
import Registration from './Pages/RegistrationPage/RegistrationPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Survey from './Pages/SurveyPage/SurveyPage';
import WebInfo from './Pages/WebInfoPage/WebInfoPage';
import EditNotifications from './Pages/EditNotificationsPage/EditNotificationsPage';
import SurveyComplete from './Pages/SurveyCompletePage/SurveyComplete';
import EditProfile from './Pages/EditProfilePage/EditProfile';
import ResetPassword from './Pages/ResetPasswordPage/ResetPasswordPage';
import ResetPasswordConfirmation from './Pages/ResetPasswordConfirmationPage/ResetPasswordConfirmation';

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
        <Route path="/" component={Home} exact={true} />
        <Route path="/info" component={WebInfo} exact={true} />
        <Route path="/registration" component={Registration} exact={true} />
        <Route path="/landingpage" component={LandingPage} exact={true} />
        <Route path="/survey" component={Survey} exact={true} />
        <Route path="/surveycomplete" component={SurveyComplete} exact={true} />
        <Route path="/editnotifs" component={EditNotifications} exact={true} />
        <Route path="/editprofile" component={EditProfile} exact={true} />
        <Route path="/resetpassword" component={ResetPassword} exact={true} />
        <Route path="/resetpasswordconfirmation" component={ResetPasswordConfirmation} exact={true} />
        {/* <Route path="/" render={() => <div>404</div>} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
