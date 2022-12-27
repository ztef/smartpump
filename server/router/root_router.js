/*
    Smartpump Application Server

    Root Router, Used for HTML Static Content
    and Testing

*/

import root_route from "./root_route.js";

import { Router } from "express";


const router = Router();

// Define the API routes :

router.get("/", root_route);

export default router;




