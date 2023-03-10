/*
    Smartpump Application Server

    Encapsulates access to lowDB
    
*/

import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';



class dbms {
    sdirname = ""; 
    file = "";
    adapter;
    db;

    constructor(dbtype) {
      this.dbtype = dbtype;

      this.sdirname = dirname(fileURLToPath(import.meta.url));
      this.file = join(this.sdirname, 'db.json');
  
      this.adapter = new JSONFileSync(this.file);
      this.db = new LowSync(this.adapter);

      
    }

    say(){
        return 'for testing';
    }

    test(){
        this.db.read();
  
        this.db.data ||= { users: [], company: [] };
  
        if (this.db.data.users.length === 0) {
            this.db.data.users.push({
            key: '1',
            status: true,
            username: 'testuser',
            password: 'testpass',
            });
        }
  
        this.db.write();
    }


  }

 export {dbms};

