import React, { useState } from 'react';
import '../components/LandingPage.css';

function checkPassword(password, username, email) {
  // Minimum length check
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  // Complexity check
  const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (!complexityRegex.test(password)) {
    return "Include a uppercase letter, a lowercase letter, a number, and a special character.";
  }

  // No user-specific information check
  if (password.includes(username) || password.includes(email)) {
    return "Password cannot contain your username or email.";
  }

  // If all checks pass, return null to indicate a valid password
  return null;
}

const LandingPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showValidationStep, setShowValidationStep] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validationCode, setValidationCode] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [loginError, setLoginError] = useState('');

  const clearErrors = () => {
    setUsernameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setFirstNameError('');
    setLastNameError('');
    setLoginError('');
  }

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    // Reset error messages when toggling forms
    clearErrors();
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    // Reset error messages when toggling forms
    clearErrors();
  };

  const toggleValidationStep = () => {
    setShowValidationStep(!showValidationStep);
    // Reset error messages when toggling forms
    clearErrors();
  };

  const isUsernameValid = (username) => {
    // Define a regular expression to match usernames without special characters
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  };

  const isNameValid = (name) => {
    const nameRegex = /^[A-Za-z-' ]+$/;
    return nameRegex.test(name);
  };

  const isEmailValid = (email) => {
    // Define a regular expression to match email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    return emailRegex.test(email);
  };

  const isPhoneValid = (phone) => {
    // Define a regular expression to match a valid phone number format
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // Formats: "(123)-456-7890," "123.456.7890," "123 456 7890," and "123-456-7890."
    return phoneRegex.test(phone);
  };

  const handleLogin = async event => {

    event.preventDefault();

    var bp = require('../components/Path.js');

    console.log("Attemping to log in");
    
    var loginDetails = {Login:username,Password:password};
    var loginJSON = JSON.stringify(loginDetails);

    try {
      const response = await fetch(bp.buildPath('api/account/Login'), //LOGIN API PATH MAY NEED TO BE ADJUSTED
      {method:'POST',body:loginJSON,headers:{'Content-Type': 'application/json'}});

      var responseDetails = await response.text();
      try {
        responseDetails = JSON.parse(responseDetails);
      } catch (e) {
        console.log("Bad response from API");
      }
      console.log(responseDetails);

      if (responseDetails.userId < 0) {
          setLoginError('Username/Password combination incorrect');
      }
      else {
        var user = {firstName:responseDetails.firstName,
                    lastName:responseDetails.lastName,
                    id:responseDetails.id};
        localStorage.setItem('user_data', JSON.stringify(user));
        setPasswordError('');
        window.location.href = '/pages';
      }
    }
    catch (e) {
      alert(e.toString());
      return;
    }
  };

  const handleRegister = async event => {

    event.preventDefault();

    /* CAN REMOVE FOR PRODUCTION */
    clearErrors();
    ////

    let err = false;

    if (!isNameValid(firstName)) {
      setFirstNameError("Invalid first name");
      err = true;

    }

    if (!isNameValid(lastName)) {
      setLastNameError("Invalid last name");
      err = true;
    }

    if (!isEmailValid(email)) {
      //alert('Invalid email format.');
      setEmailError("Invalid email format.");
      err = true;
    }

    if (!isPhoneValid(phone)) {
      //alert('Invalid email format.');
      setPhoneError("Invalid phone format.");
      err = true;
    }

    if (!isUsernameValid(username)) {
      //alert('Invalid username format.');
      setUsernameError("Invalid username format.");
      err = true;
    }

    const passwordValidation = checkPassword(password, username, email);
    if (passwordValidation != null) {
      setPasswordError(passwordValidation);
      err = true;
    }

    if (err === true) {
      return;
    }

    var bp = require('../components/Path.js');

    var registerDetails = {firstName:firstName,lastName:lastName,
                            email:email, phone:phone,
                            login:username, password:password}
    var registerJSON = JSON.stringify(registerDetails);

    console.log("Sending request to API:");
    console.log(registerJSON);

    try {
      const response = await fetch(bp.buildPath('api/account/Register'), //LOGIN API PATH MAY NEED TO BE ADJUSTED
      {method:'POST',body:registerJSON,headers:{'Content-Type': 'application/json'}});

      var responseDetails = JSON.parse(await response.text());
      console.log(responseDetails);

      if (responseDetails.hasOwnProperty("Status") && responseDetails.Status != 200) {
          //Handle errors
          console.log("Error from register API");
          console.log(responseDetails.Status)
          console.log(responseDetails);
      }
      else {
        console.log("Register request good");
        var user = {firstName:responseDetails.firstName,
                    lastName:responseDetails.lastName,
                    id:responseDetails.id};
        localStorage.setItem('user_data', JSON.stringify(user));
        clearErrors();
        //window.location.href = '/pages'; //EMAIL VERIFICATION FIRST
      }
    }
    catch (e) {
      alert(e.toString());
      return;
    }

    //toggleValidationStep(); // Move to the validation step
    console.log("Registration handler complete.");
  };

  const handleValidation = async event => {
    event.preventDefault();
    // Handle validation code logic here ////////////////////////////
    console.log('Validation code:', validationCode);
  };

  const goToNextPage = () => {
    window.location.href = '/pages';
  }

  return (
  <div className="landing-page">
  <div className="background-image"></div>
  <div className="content">
    <div className="title-box">
      <h1>PlaceFolio</h1>
      <h2>The map-based digital photo album</h2>
      <button className="PRODUCITON-BUTTON" onClick={goToNextPage}>
              REMOVE FOR PRODUCTION: GO TO NEXT PAGE
      </button>
    </div>

    {/* LOGIN BOX */}
    <div className="login-register-box">
      {showLoginForm ? (
        <div className="login-register-form">
          <div className="label-input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={usernameError ? "invalid-input" : "valid-input"}
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={loginError ? "invalid-input" : "valid-input"}
              />
            </div>
            {loginError && <p className="error-text">{loginError}</p>}
          <div className="login-button-container">
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
            <button className="back-button" onClick={toggleLoginForm}>
              Go Back
            </button>
          </div>
        </div>

      ) : showRegisterForm ? (
        showValidationStep ? (
          
          <div className="login-register-form"> {/* EMAIL CONFIRMATION BOX */}
            <div className="prompt">
                        Please enter the validation code sent to the Email you entered.
            </div>
            <div className="label-input-group">
              <label htmlFor="validationCode">Validation Code</label>
              <input
                type="text"
                id="validationCode"
                placeholder="Validation Code"
                value={validationCode}
                onChange={(e) => setValidationCode(e.target.value)}
              />
            </div>
            <div className="validation-button-container">
              <div className="vertical-buttons">
                <button className="confirm-button" onClick={handleValidation}>
                  Confirm
                </button>
                <button className="back-button" onClick={toggleValidationStep}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="login-register-form">
            <div className="input-row-group">
              <div className="input-error-group">
              <div className="label-input-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={firstNameError ? "invalid-input" : "valid-input"}
                />
              </div>
              {firstNameError && <p className="error-text">{firstNameError}</p>}
              </div>
              <div className="input-error-group">
              <div className="label-input-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={lastNameError ? "invalid-input" : "valid-input"}
                />
              </div>
              {lastNameError && <p className="error-text">{lastNameError}</p>}
              </div>
            </div>
            <div className="input-row-group">
            <div className="input-error-group">
              <div className="label-input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Name@Host.Domain"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? "invalid-input" : "valid-input"}
                />
              </div>
              {emailError && <p className="error-text">{emailError}</p>}
              </div>
              <div className="input-error-group">
              <div className="label-input-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="(XXX)-XXX-XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={phoneError ? "invalid-input" : "valid-input"}
                />
              </div>
              {phoneError && <p className="error-text">{phoneError}</p>}
              </div>
            </div>
            <div className="input-row-group">
              <div className="input-error-group">
              <div className="label-input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={usernameError ? "invalid-input" : "valid-input"}
                />
              </div>
              {usernameError && <p className="error-text">{usernameError}</p>}
              </div>
              <div className="input-error-group">
              <div className="label-input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError ? "invalid-input" : "valid-input"}
                />
              </div>
              {passwordError && <p className="error-text">{passwordError}</p>}
              </div>
            </div>
            <div className="register-button-container">
              <button className="register-button" onClick={handleRegister}>
                Register
              </button>
              <button className="back-button" onClick={toggleRegisterForm}>
                Go Back
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="button-container">
          <button className="login-button" onClick={toggleLoginForm}>
            Log In
          </button>
          <button className="register-button" onClick={toggleRegisterForm}>
            Register
          </button>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default LandingPage;