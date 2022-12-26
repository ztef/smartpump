import React from 'react';
import {LoginErrorTemplate} from './LoginTemplates.js';
import '../../STYLES/styles.scss';
import {useAppBloc} from "../../App.tsx";


const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};


const LoginError = () => {
  
  const bloc = useAppBloc();


  function Retry() {
    
    
    bloc.setUnAuthenticated();


  }

  return (
    <div className="form">
    <form>
      <LoginErrorTemplate onClick={Retry}/>
    </form>
  </div>
  );
};

export default LoginError;