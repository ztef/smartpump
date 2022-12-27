import React from 'react';
import logo from './logo.svg';
import {BLoCApp}  from './BLoC_APP';

import Login from "./components/Login/Login";
import Wellcome from "./components/Restricted/Wellcome";
import './App.css';
import { createContext } from './BLOC/Context';
import { AppBloc } from './blocs/AppBloc';

const [blocContext, useBloc] = createContext<AppBloc>();
export const useAppBloc = useBloc;

/*
     SmartPUMP Application Client


     This is the entry point of the APP.
     Designed using the CLOC Pattern, encapsulates the
     rest of the tree inside a App Wide BLOC Wrapper.

     All The Business Logic is cotained in two files :

        Inside the blocs Folder :
          APPBLOC (App Wide Business Logic Controller)
          APPSTAT (Application States)

    ALl The Views are controled by BLoCApp


*/

const App: React.FC = () => {
  return (
      <blocContext.Provider value={new AppBloc()}>
          <BLoCApp/>
      </blocContext.Provider>
  );
};

export default  App ;