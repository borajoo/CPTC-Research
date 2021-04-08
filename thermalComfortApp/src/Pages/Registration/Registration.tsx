import React, { useState } from 'react';
import "./Registration.css";
import BaseInputField from "../../components/BaseInputField/BaseInputField";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseCheckbox from "../../components/BaseCheckbox/BaseCheckbox";
import { useAuth } from '../../contexts/AuthContext'
import { RouteComponentProps } from 'react-router';
import { toast } from '../../toast';

const Registration: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const { signup } = useAuth();

  let validPassword = () => {
    if (password && password === cpassword)
      return true;
    else
      return false;
  };

  let validEmail = () => {
    if(email.includes('@') && email.includes('.') && email.length > 10)
        return true;
    else
        return false;
  }

  async function handleRegister() {
    try {
    if (!validEmail()) {
        toast("Email is not valid");
        return;
        }
      if (!validPassword()) {
        toast("Passwords do not match");
        return;
      }
      if (!consent) {
        toast("Accept Consent Form");
        return;
      }
      await signup(email, password);
      toast("Registration successful!");
      history.push("/");
    } catch (error) {
      toast(`${error}`);
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        <div className="login-subtitle">
          Registration
        </div>
        <div className="login-input">
          <BaseInputField
            width={window.innerWidth <= 800 ? '300px' : '350px'}
            value={email}
            label={'Email Address'}
            iduser={'username'}
            password={false}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input" style={{marginBottom: '5px'}}>
          <BaseInputField
              width={window.innerWidth <= 800 ? '300px' : '350px'}
              value={password}
              label={'Password'}
              iduser={'password'}
              password={true}
              onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-input" style={{marginBottom: '5px'}}>
          <BaseInputField
              width={window.innerWidth <= 800 ? '300px' : '350px'}
              value={cpassword}
              label={'Confirm Password'}
              iduser={'confirm-password'}
              password={true}
              onChange={(e: any) => setCPassword(e.target.value)}
          />
        </div>
        <div className="consent-checkbox">
          <BaseCheckbox
            label={"Accept Consent Form"}
            checked={consent}
            onChange={() => {
              setConsent(!consent);
            }}
          />
          <a className="see-consent" href="https://drive.google.com/file/d/1sAONY3BuhSxu-Iswr90fKoGOrQyWIJEZ/view?usp=sharing" target="_blank">See Consent Form</a>
        </div>
        <div className="register2-button">
          <BaseButton className="login-button" onClick={handleRegister} width={window.innerWidth <= 800 ? '300px' : '350px'}>Register</BaseButton>
        </div>
        <a className="return-login" href="/">Return to Login</a>
      </div>
    </div>
  );
};

export default Registration;