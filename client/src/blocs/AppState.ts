/*
    This Interfaces describes all the States
    for the entier Apllication.

*/

export interface CommonAppState {
    authenticated: boolean;
   
}

export interface LoadingAppState {
    kind: "LoadingAppState"
}

export interface AuthenticatedAppState {
    kind: "AuthenticatedAppState";
    token: string;
    user_data: any;
    
}

export interface Updating {
    kind: "Updating";
   
}

export interface Updated {
    kind: "Updated";
   
}

export interface MainState {
    kind: "MainState";
   
}

export interface EditingState {
    kind: "EditingState";
   
}


export interface UpdateError {
    kind: "UpdateError";
    error: string;
}


export interface AuthenticatedErrorState {
    kind : "AuthenticatedErrorState";
    error: string;
}

export interface UnAuthenticatedAppState {
    kind: "UnAuthenticatedAppState";  
}

export interface Authenticating {
    kind: "Authenticating";  
}

export interface ErrorAppState {
    kind: "ErrorAppState"
    error: string;
}

export type AppState = (LoadingAppState | AuthenticatedAppState| UnAuthenticatedAppState | MainState | Authenticating |EditingState | Updating | AuthenticatedErrorState | Updated | UpdateError | ErrorAppState) & CommonAppState


export const appInitialState: AppState = {
    kind: "UnAuthenticatedAppState",
    authenticated: false
}
/*

*/