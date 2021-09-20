import React, { useState } from 'react';
import "./Login.css";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseInputField from "../../components/BaseInputField/BaseInputField";
import { RouteComponentProps } from 'react-router';
import { toast } from '../../toast';
import CP_logo_CMYK_grn from '../../assets/CP_logo_CMYK_grn.jpg';
import { useAuth } from "../../contexts/AuthContext";

const Login: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  async function handleLogin() {
    try {
      await login(email, password);
      history.push("/home");
    } catch (error) {
      toast(`Error logging in: ${error}`);
    }
  }

  function goRegister() {
    history.push({
      pathname: '/register'
    });
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        <img src={CP_logo_CMYK_grn} alt="Cal Poly Logo" />
        <h1>Thermal Comfort</h1>
          <div className="login-input">
            <BaseInputField
              width={window.innerWidth <= 800 ? '300px' : '350px'}
              value={email}
              label={'Email'}
              iduser={'email'}
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
          <a className="forgot-pass" href="/resetPassword">Forgot password?</a>
          <div className="login-button">
            <BaseButton onClick={handleLogin} width={window.innerWidth <= 800 ? '300px' : '350px'}>Login</BaseButton>
          </div>
          <div className="new-user"></div>
          <div className="register-button">
            <BaseButton className="login-button" onClick={goRegister} width={window.innerWidth <= 800 ? '300px' : '350px'}>Register</BaseButton>
          </div>
      </div>
    </div>
  );

};

export default Login;