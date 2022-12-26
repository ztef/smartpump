
export default async (req, res, next) => {
  
    var DB = req.app.get('database').db;
   
    
  
    try {
      DB.read();      
      DB.data ||= { users: [] };
      
      const {users} = DB.data;

      const user = users.find((u) => u.email === req.query.email)

      return res.status(200).json({users: user});
    } catch (err) {
      let errors = {};
      errors.get_users = "Failed to get users";
      errors.endpoint = "get_users";
      return res.status(500).json(errors);
    }





};