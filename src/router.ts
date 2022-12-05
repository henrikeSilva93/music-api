import { Router } from "express";
import { BandController } from "./controller/BandController";
import { UserController } from "./controller/UserController";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

export const routes = Router()


routes.get('/users', new UserController().index)
routes.get('/bands', new BandController().index)








