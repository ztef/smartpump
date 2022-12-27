/*
    Smartpump Application Server

    Module : get_users , 
             returns all (limit) records.
             This is just for testing or extensions in the future.
*/

export default async (req, res, next) => {
 

    console.log(req);
 
    var DB = req.app.get('database').db;
    
    let { limit } = req.query;
    if (!limit) limit = 10;
  
    if (typeof limit === "string") {
      limit = Number(limit);
    }
  
    try {
      DB.read();      
      DB.data ||= { users: [] };
      
      const {users} = DB.data;

      

      return res.status(200).json({users: users});
    } catch (err) {
      let errors = {};
      errors.get_users = "Failed to get users";
      errors.endpoint = "get_users";
      return res.status(500).json(errors);
    }





};
