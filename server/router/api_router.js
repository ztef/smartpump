//import passport from "passport";
import get_users from "./crud/get_users.js";
import get_user from "./crud/get_user.js";
import log_user from "./crud/log_user.js";

import { Router } from "express";
//import login_user from "../CRUD/READ/login_user";
//import update_user from "../CRUD/UPDATE/update_user";
//import refresh_user_token from "../CRUD/READ/refresh_user_token";
//import update_user_picture from "../CRUD/UPDATE/update_user_picture";
//import get_user_picture_by_userid from "../CRUD/READ/get_user_picture_by_userid";
const router = Router();


// @route api/users
// @method GET
// @desc allows someone to get a list of users
// @access Public
router.get("/get_users", get_users);

router.get("/get_user", get_user);

router.get("/log_user", log_user);

export default router;




/*

// @route api/users/picture/userid
// @method GET
// @desc allows someone to get the picture for that user
// @access Public
router.get("/picture/:userid", get_user_picture_by_userid);

// @route api/users/login
// @method GET
// @desc allows someone to login into their account
// @access Public
router.post("/login", login_user);


// @route api/users/picture
// @method PATCH
// @desc allows user to update their picture using userid and picture in req.body
// @access Private
router.patch('/picture', 
passport.authenticate("jwt", {
  session: false,
}),
update_user_picture
)

// @route api/users
// @method POST
// @desc allows user to update multiple fields
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  update_user,
  refresh_user_token
);

*/

