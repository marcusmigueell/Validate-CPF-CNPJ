import { Router } from "express";

import { ValidateController } from "../controller/ValidateController";

const routes = Router();

routes
    .route("/validate/:data")
    .get(new ValidateController().handle);

export { routes };