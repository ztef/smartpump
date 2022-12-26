import axios from "axios";
import Bloc from "../BLOC/Bloc";
import { appInitialState, AppState } from "./AppState";


class AppBloc extends Bloc<AppState> {

    repository : any; 
    token: any;

    constructor(){
        super(appInitialState);
    }

    //
    setAuthenticated = (auth_data: { token: any; user_data:any }) =>{
        this.token = auth_data.token;
        this.repository = auth_data.user_data;
        this.changeState({kind:"AuthenticatedAppState", token:auth_data.token, user_data:auth_data.user_data, authenticated: true });
    };

    setMainState = () =>{
        this.changeState({kind:"MainState", authenticated:true});
    };

    setEditingState = () =>{
        this.changeState({kind:"EditingState", authenticated:true});
    };


    setAuthenticatedError = (error: any) =>{
        this.changeState({kind:"AuthenticatedErrorState", error:error,  authenticated: false });
    };

    //
    setUnAuthenticated = () => {
        this.changeState({kind:"UnAuthenticatedAppState", authenticated: false });
    };

    setUpdated = (updated_data:any) => {
        this.repository = updated_data.user_data;
        this.changeState({kind:"Updated", authenticated: true });
    };

    setUpdateError = (e:any) => {
        this.changeState({kind:"UpdateError", error:e, authenticated: true });
    };

    sendAuthenticationCredentials = (credentials: any) => {
        console.log('Comienzo Auth');
        this.changeState({kind:"Authenticating", authenticated: false });
        
        this.getCredentials(credentials);
        
    }

    sendUpdatedUserData= (credentials: any) => {
        console.log('Enviando Update');
        this.changeState({kind:"Updating", authenticated: true });
        
        this.sendUpdate(credentials);
        
    }


   async getCredentials(credentials: any) {
   
        let api_url = `http://localhost:5000/api/log_user?email=${credentials.username}&password=${credentials.password}`;
        try {
            const res = await axios.get(api_url);
            var response = res;
            
            
            this.setAuthenticated(response.data);

        } catch(err) {
            var e = err;
            this.setAuthenticatedError(e);

    
        }
    }

    async sendUpdate(user_data: any) {
   
        let api_url = `http://localhost:5000/api/update_user`;
        try {
            const res = await axios.post(api_url,user_data);
            var response = res;
            
            this.setUpdated(response.data);

        } catch(err) {
            var e = err;
            this.setUpdateError(e);

    
        }
    }





}
    



export { AppBloc };