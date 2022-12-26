import React from 'react';
import {UpdatedTemplate} from './AppTemplates.js';
import '../../STYLES/styles.scss';
import {useAppBloc} from "../../App.tsx";


const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};


const Updated = () => {
  
  const bloc = useAppBloc();


  function Retry() {
    
    
    bloc.setUnAuthenticated();

  }

  return (
    <div className="form">
    <form>
      <UpdatedTemplate onClick={Retry}/>
    </form>
  </div>
  );
};

export default Updated;