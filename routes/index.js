import { Router } from "express";

import getTest,{ getTestingr,getingrct } from "../controller/testApi.controller.js";


const router = Router();

router.get('/test', getTest);
router.get('/ing', getTestingr);
router.get('/ingrct',getingrct);
// router.get('/rctmodop',getmodop)
export default router
