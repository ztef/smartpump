import express from 'express';
import {dbms} from './dbms/dbhandler.js';
import setrouter from './router/setrouter.js';
import cors from 'cors';
 
const database = new dbms('lowdb');


const app = express();
app.use(cors());    
app.set('database', database); 


setrouter(app);




// start server
app.listen(5000, function(){
  console.log('server on port 5000')
})
