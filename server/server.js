import express from 'express';
import {dbms} from './dbms/dbhandler.js';
import setrouter from './router/setrouter.js';
import cors from 'cors';
import bodyParser from "body-parser";
 
const database = new dbms('lowdb');


const app = express();
app.use(cors());    
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: "500mb", extended: true }));

app.set('database', database); 


setrouter(app);




// start server
app.listen(5000, function(){
  console.log('server on port 5000')
})
