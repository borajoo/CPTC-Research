  import React from 'react';
  import "./ResetPasswordConfirmation.css";
  import { RouteComponentProps } from 'react-router';

  const ResetPasswordConfirmation: React.FC<RouteComponentProps> = ({history}) => {
    return (
      <div className="login-page-container">
        <div className="login-container">
          <div className="login-subtitle">
            Confirmation
          </div>
          <div className="body-text">
          Your password reset email has been sent! Check your email to finish resetting your password.          </div>
          <a className="confirm-return-login" href="/">Return to Login</a>
        </div>
      </div>
    );
  };

  export default ResetPasswordConfirmation;