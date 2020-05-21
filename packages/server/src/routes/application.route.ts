import express from "express";
import {getApplicationsController} from "../controllers/application.controller";

const router = express.Router();

router.get("/", getApplicationsController);

export const ApplicationRoutes = router;
