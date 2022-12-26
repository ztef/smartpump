import lodash from 'lodash';
import jwt from "jsonwebtoken";

const  secretOrKey  = "secret";

export default async (req, res, next) => {
  
    var DB = req.app.get('database').db;

    let credentials = {email:req.query.email, password:req.query.password}

    console.log(credentials);

    DB.read();
    DB.chain = lodash.chain(DB.data);

    try {
        let user = DB.chain
        .get("users")
        .find({ email: req.query.email, password: req.query.password })
        .value();
  
    if (user) {
      let payload = user;
      // Sign Token
      jwt.sign(
        payload,
        secretOrKey,
        {
          expiresIn: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        },
        (err, token) => {
          if (err) {
            return res.status(500).json(err.toString);
          }
          return res.status(200).json({
            success: true,
            token: "Bearer " + token,
            user_data: payload ,
          });
        }
      );



    } else {
      errors.password = "Invalid login information";
      return res.status(500).json(errors);
    }
  } catch (err) {
    let errors = {};
    errors.err = err.toString();
    errors.login_user = "Failed to login_user";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }





};