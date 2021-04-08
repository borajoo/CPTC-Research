  import React from 'react';
  import "./ResetPasswordConfirmation.css";
  import { RouteComponentProps } from 'react-router';
  import BaseButton from "../../components/BaseButton/BaseButton";

  const ResetPasswordConfirmation: React.FC<RouteComponentProps> = ({history}) => {
    return (
      <div className="login-page-container">
        <div className="login-container">
          <div className="login-subtitle">
            Success
          </div>
          <div className="body-text">
            Your password reset email has been sent! Check your email to finish resetting your password.
          </div>
          <div className="return-button">
            <BaseButton onClick={() => {
                history.push({
                  pathname: '/',
                });
              }} 
              width={window.innerWidth <= 800 ? '300px' : '350px'}
            >
              Return to Login
            </BaseButton>
          </div>
        </div>
      </div>
    );
  };

  export default ResetPasswordConfirmation;