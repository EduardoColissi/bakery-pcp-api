import { Router } from "express";
import authMiddlewares from "./middlewares/auth";
import UsersController from "./controllers/UsersController";
import CompaniesController from "./controllers/CompaniesController";

const routes = Router();
const usersController = new UsersController();
const companiesController = new CompaniesController();

routes.post("/login", usersController.login);
routes.use(authMiddlewares);
routes.post("/user", usersController.createUser);
routes.post("/company", companiesController.createCompany);

export default routes;
