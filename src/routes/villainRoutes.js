import { Router } from "express";
import VillainController from "../controller/villainController.js";

const villainRouter = Router();

villainRouter.get('/', VillainController.all);
villainRouter.get('/:id', VillainController.show);
villainRouter.post('/', VillainController.create);
villainRouter.put('/:id', VillainController.update);
villainRouter.delete('/:id', VillainController.delete);

export default villainRouter;