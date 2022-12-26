import { FC, ReactElement } from 'react';
import {useAppBloc} from "./App";

import React from 'react';
import Login from './components/Login/Login';
import LoginError from './components/Login/LoginError';
import Wellcome from './components/Application/Wellcome';
import Updated from './components/Application/Updated';
import UpdateError from './components/Application/UpdateError';


import BlocBuilder from './BLOC/BlocBuilder';
import { AppState } from './blocs/AppState';
import { JsxElement } from 'typescript';


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
      return <Wellcome/>; 
    if(s == "Updated")
      return <Updated/>; 
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



