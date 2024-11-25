import { Router } from "express";

import getTest,{ getTestingr,getingrct, getunit, postrct } from "../controller/testApi.controller.js";


const router = Router();

router.get('/test', getTest);
router.get('/ing', getTestingr);
router.get('/ingrct',getingrct);
router.get('/lst_unit',getunit);
router.post('/post',postrct)
export default router
