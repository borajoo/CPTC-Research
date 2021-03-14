import React, { useState } from 'react';
import { loginUser } from '../../firebaseConfig';
import "./HomePage.css";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseInputField from "../../components/BaseInputField/BaseInputField";
import { RouteComponentProps } from 'react-router';
import { toast } from '../../toast';
import loginlogo from '../../assets/loginlogo.png';
import { useAuth } from "../../contexts/AuthContext";

const Home: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  async function handleLogin() {
    try {
      await login(email, password);
      history.push("/landingpage");
    } catch (error) {
      toast(`Error logging in: ${error}`);
    }
    /*
    const res = await loginUser(email, password);

    if (res && res.user) {
      setPassword("");
      setEmail("");
      history.push({
        pathname: 'landingPage',
        state: { uid: res.user.uid},
      });

    } else {
      toast('Error logging in with your credentials');
    }
    */
  }

  function goRegister() {
    history.push({
      pathname: '/registration'
    });
  }

  function goResetPassword() {
    history.push({
      pathname: '/resetPassword',
    });
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        {/* <img className="login-logo" src={loginlogo} /> */}
        <div className="login-title">
          CAL POLY
        </div>
        <div className="login-subtitle">
          Thermal Comfort
        </div>
          <div className="login-input">
            <BaseInputField
              width={'350px'}
              value={email}
              label={'Username'}
              iduser={'username'}
              password={false}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-input" style={{marginBottom: '5px'}}>
            <BaseInputField
              width={'350px'}
              value={password}
              label={'Password'}
              iduser={'password'}
              password={true}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <a className="forgot-pass" href="/resetPassword">Forgot password?</a>
          <div className="login-button">
            <BaseButton onClick={handleLogin} width={'350px'}>Login</BaseButton>
          </div>
          <div className="new-user">
            New User
          </div>
          <div className="register-button">
            <BaseButton className="login-button" onClick={goRegister} width={'350px'}>Register</BaseButton>
          </div>
      </div>
    </div>
  );

};

export default Home;