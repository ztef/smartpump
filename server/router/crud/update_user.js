import lodash from 'lodash';

export default async (req, res, next) => {
  
    var DB = req.app.get('database').db;
   
    console.log('UPDATING USER');

    DB.read();
    DB.chain = lodash.chain(DB.data);

    let user_data = req.body;

    try {

        let user = DB.chain
        .get("users")
        .find({ _id: user_data._id })
        .value();
  
    if (user) {
      
        
        let updated = DB.data.users.map((t) => (t._id === user._id ? user_data: t));
        
        DB.data.users = updated;
        DB.write();

        return res.status(200).json({user_data: user_data});


    } else {
      errors.password = "Invalid update information";
      return res.status(500).json(errors);
    }
  } catch (err) {
    let errors = {};
    errors.err = err.toString();
    errors.login_user = "Failed to update_user";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }





};