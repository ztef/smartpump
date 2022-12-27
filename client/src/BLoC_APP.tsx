import { FC, ReactElement } from 'react';
import {useAppBloc} from "./App";

import React from 'react';
import Login from './components/Login/Login';
import LoginError from './components/Login/LoginError';
import Edit from './components/Application/EditForm';
import Updated from './components/Application/Updated';
import MainScreen from './components/Application/MainScreen';
import UpdateError from './components/Application/UpdateError';


import BlocBuilder from './BLOC/BlocBuilder';
import { AppState } from './blocs/AppState';
import { JsxElement } from 'typescript';


/*
    This Code is the main BLOC Builder 

    Here (based on the App State) are controlled all
    the screens of the entier App.

*/

const BLoCApp: React.FC = () => {
  
  const bloc = useAppBloc();

  function container(s:string)  {
    if(s == "UnAuthenticatedAppState")
      return <Login/>;
    if(s == "Authenticating")
      return <button>Autenticando</button>; 
    if(s == "AuthenticatedErrorState")
      return <LoginError/>;
    if(s == "AuthenticatedAppState")
      return <MainScreen/>; 
    if(s == "Updated")
      return <Updated/>;
    if(s == "MainState")
      return <MainScreen/>;  
    if(s == "EditingState")
      return <Edit/>;    
    if(s == "Updating")
      return <button>SENDING ...</button> 
    if(s == "UpdateError")
      return <UpdateError/>
    return <button>UNKOWN STATE</button>  
     
  };


  return (
      <BlocBuilder
          bloc={bloc}
          builder={(state: AppState) => {
            return(container(state.kind));
          }                          
        }                     
      />
  );
};


export {BLoCApp}



