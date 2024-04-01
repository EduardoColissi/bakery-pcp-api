import { Router } from "express";
import authMiddlewares from "./middlewares/auth";
import UsersController from "./controllers/UsersController";

const routes = Router();
const usersController = new UsersController();

routes.post("/login", usersController.login);
routes.post("/user", usersController.createUser);
routes.use(authMiddlewares);

export default routes;
