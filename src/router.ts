import { Router } from "express";
import authMiddlewares from "./middlewares/auth";

const routes = Router();

routes.use(authMiddlewares);

export default routes;
