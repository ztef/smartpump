import React from 'react';
import {EditTemplate} from './AppTemplates.js';
import '../../STYLES/styles.scss';
import {useAppBloc} from "../../App";
import BlocBuilder from '../../BLOC/BlocBuilder';
import { AppState, AuthenticatedAppState } from '../../blocs/AppState.js';


const handleSubmit = (event: { preventDefault: () => void; }) => {
  // Prevent page reload
  event.preventDefault();
};


const Wellcome = () => {
  
  const bloc = useAppBloc();


  function update(credentials: any) {
    
    var c = credentials;
    bloc.sendUpdatedUserData(credentials);
     
  }

  function logout() {
    
    bloc.setUnAuthenticated();
     
  }


  return (
    <div className="form">
    <form>
    <BlocBuilder
          bloc={bloc}
          builder={(state:any) => 
            <EditTemplate user_data = {state.user_data} onClick={update} onClickLogout={logout}/>            
          }                                
     />                      
    </form>  
    </div>
  );
};

export default Wellcome;