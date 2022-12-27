/*

  Smartpump Application Server

  Coded by Esteban Ortiz for the Challenge.

      Using :
      
            LowDB database manager
            express for routing
            JWT for Json Web Tokens

    Basically this simple server exposes an API for :
            get_users (For testing)
            get_user (get a sinle user from the DB)
            log_user for Authentication (return a token)  
            update_user to update a single user record

*/

import express from 'express';
import {dbms} from './dbms/dbhandler.js';
import setrouter from './router/setrouter.js';
import cors from 'cors';
import bodyParser from "body-parser";
 
const database = new dbms('lowdb');


const app = express();
//app.use(cors());    
app.use(cors({
  credentials: true,
  preflightContinue: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],
  origin: true
}));

app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: "500mb", extended: true }));

app.set('database', database); 


setrouter(app);


// start server
app.listen(5000, function(){
  console.log('server on port 5000')
})
