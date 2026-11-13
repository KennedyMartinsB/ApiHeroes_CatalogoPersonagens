import { Router } from "express";
import HeroController from "../controller/heroController.js";

const heroRouter = Router();

heroRouter.get('/', HeroController.all);
heroRouter.get('/:id', HeroController.show);
heroRouter.post('/', HeroController.create);
heroRouter.put('/:id', HeroController.update);
heroRouter.delete('/:id', HeroController.delete);

export default heroRouter
