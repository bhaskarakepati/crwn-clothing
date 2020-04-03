import React from "react";

import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../signup/signup.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sing-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
