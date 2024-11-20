import { Router } from "express";

import getTest from "../controller/testApi.controller.js";

const router = Router();

router.get('/test', getTest);

export default router
