import React from 'react';
import {LoginContainer} from './LoginTemplates.js';
import '../../STYLES/styles.scss';
import {useAppBloc} from "../../App.tsx";


const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};


const Login = () => {
  
  const bloc = useAppBloc();


  function login(credentials) {
    
    
    bloc.sendAuthenticationCredentials(credentials);


  }

  return (
    <div className="form">
    <form>
      <LoginContainer onClick={login}/>
    </form>
  </div>
  );
};

export default Login;