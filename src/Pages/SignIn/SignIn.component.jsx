import React from 'react';
// import SignIn from '../Components/SignIn/SignIn.component';
import SignInForm from '../../Components/SignInForm/SignInForm.component';

import './SignIn.scss';

const SignIn = () => {
  return (
    <div className="signinContainer">
      <SignInForm />
    </div>
  );
};

export default SignIn;