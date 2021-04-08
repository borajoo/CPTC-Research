import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from './Pages/HomePage/HomePage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import Registration from './Pages/Registration/Registration';
import LandingPage from './Pages/LandingPage/LandingPage';
import Survey from './Pages/SurveyPage/SurveyPage';
import WebInfo from './Pages/WebInfoPage/WebInfoPage';
import EditNotifications from './Pages/EditNotificationsPage/EditNotificationsPage';
import SurveyComplete from './Pages/SurveyCompletePage/SurveyComplete';
import EditProfile from './Pages/EditProfilePage/EditProfilePage';
import ResetPassword from './Pages/ResetPasswordPage/ResetPasswordPage';
import ResetPasswordConfirmation from './Pages/ResetPasswordConfirmationPage/ResetPasswordConfirmation';

import { AuthProvider } from "./contexts/AuthContext";

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
        <AuthProvider>
          <Route path="/" component={Home} exact={true} />
          <Route path="/info" component={WebInfo} exact={true} />
          <Route path="/registration" component={RegistrationPage} exact={true} />
          <Route path="/register" component={Registration} exact={true} />
          <PrivateRoute path="/landingpage" component={LandingPage} exact={true} />
          <PrivateRoute path="/survey" component={Survey} exact={true} />
          <PrivateRoute path="/surveycomplete" component={SurveyComplete} exact={true} />
          <PrivateRoute path="/editnotifs" component={EditNotifications} exact={true} />
          <PrivateRoute path="/editprofile" component={EditProfile} exact={true} />
          <Route path="/resetpassword" component={ResetPassword} exact={true} />
          <Route path="/resetpasswordconfirmation" component={ResetPasswordConfirmation} exact={true} />
          {/* <Route path="/" render={() => <div>404</div>} /> */}
        </AuthProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
