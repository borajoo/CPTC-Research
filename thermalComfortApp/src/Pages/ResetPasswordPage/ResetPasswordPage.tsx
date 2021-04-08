import React, { useState } from 'react';
import "./ResetPasswordPage.css";
import BaseInputField from "../../components/BaseInputField/BaseInputField";
import BaseButton from "../../components/BaseButton/BaseButton";
import { useAuth } from '../../contexts/AuthContext'
import { RouteComponentProps } from 'react-router';

const ResetPassword: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState<string>();
  const { resetPassword } = useAuth();

  function postReset() {
    if (email) {
      resetPassword(email);
      history.push({
        pathname: '/resetPasswordConfirmation',
      });
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        <div className="login-subtitle">
          Forgot Your Password?
        </div>
        <div className="body-text">
          Enter your email address and we’ll send you a link to reset it.
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
        <div className="reset-button">
          <BaseButton className="login-button" onClick={postReset} width={window.innerWidth <= 800 ? '300px' : '350px'}>Reset Password</BaseButton>
        </div>
        <a className="return-login" href="/">Return to Login</a>
      </div>
    </div>
  );
};

export default ResetPassword;