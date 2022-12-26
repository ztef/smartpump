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


const App: React.FC = () => {
  return (
      <blocContext.Provider value={new AppBloc()}>
          <BLoCApp/>
      </blocContext.Provider>
  );
};

export default  App ;