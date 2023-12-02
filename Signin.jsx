import React from "react";

const LoginForm = () => {
  return (
    <div className="login-form auth-form theme-m">
      <form className="form" method="POST">
        <div className="form-item">
          <div className="custom-input theme-m size-large">
            <div className="input-wrap align-icon-left has-icon">
              <div className="ui-tooltip-wrapper">
                <input
                  id="input-11"
                  type="text"
                  className="input"
                  placeholder="Your username or email"
                  aria-label="Your username or email"
                  aria-invalid="false"
                  name="username"
                  aria-required="true"
                  value=""
                  aria-describedby="tooltip-input-11"
                />
              </div>
              <i className="ui-icon-user input-icon"></i>
            </div>
          </div>
        </div>
        <div className="form-item">
          <div className="custom-input theme-m size-large">
            <div className="input-wrap align-icon-left has-icon">
              <div className="ui-tooltip-wrapper">
                <input
                  id="input-12"
                  type="password"
                  className="input"
                  placeholder="Your password"
                  aria-label="Your password"
                  aria-invalid="false"
                  name="password"
                  aria-required="true"
                  value=""
                  aria-describedby="tooltip-input-12"
                />
              </div>
              <i className="ui-icon-lock input-icon"></i>
            </div>
          </div>
        </div>
        <div className="form-item secondary-input-wrap">
          <div className="ui-checkbox theme-m remember-me">
            <label className="label-wrap">
              <div className="checkbox-wrap">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  data-analytics="AuthPageRememberMe"
                />
                <span className="custom-holder inset">
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="checkbox__check-icon ui-svg-icon"
                    fill="currentColor"
                  >
                    <path d="M9 18c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L9 15.6 19.3 5.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-11 11c-.2.2-.4.3-.7.3z"></path>
                  </svg>
                </span>
              </div>
              <div className="label">Remember me</div>
            </label>
          </div>
          <a
            className="text-link forgot-password-link"
            data-analytics="AuthForgotPassword"
            href="/auth/forgot_password"
          >
            Forgot your password?
          </a>
        </div>
        <div className="form-item clearfix">
          <button
            className="ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled"
            type="button"
            data-analytics="LoginPassword"
          >
            <div className="ui-content align-icon-right">
              <span className="ui-text" aria-hidden="false">
                Log In
              </span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
