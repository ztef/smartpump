import React from 'react';
import {MainScreenTemplate} from './AppTemplates.js';
import '../../STYLES/styles.scss';
import {useAppBloc} from "../../App";
import BlocBuilder from '../../BLOC/BlocBuilder';
import { AppState, AuthenticatedAppState } from '../../blocs/AppState.js';


const handleSubmit = (event: { preventDefault: () => void; }) => {
  // Prevent page reload
  event.preventDefault();
};


const MainScreen = () => {
  
  const bloc = useAppBloc();

  const user_data = bloc.repository;

  function gotoEdit(credentials: any) {
    bloc.setEditingState();
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
            <MainScreenTemplate user_data = {user_data} onClick={gotoEdit} onClickLogout={logout}/>            
          }                                
     />                      
    </form>  
    </div>
  );
};

export default MainScreen;