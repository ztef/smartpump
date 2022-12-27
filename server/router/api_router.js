/*
    Smartpump Application Server
*/

import get_users from "./crud/get_users.js";
import get_user from "./crud/get_user.js";
import log_user from "./crud/log_user.js";
import update_user from "./crud/update_user.js";

import { Router } from "express";


const router = Router();

// Define the API routes :

router.get("/get_users", get_users);
router.get("/get_user", get_user);
router.get("/log_user", log_user);
router.post("/update_user", update_user);

export default router;




