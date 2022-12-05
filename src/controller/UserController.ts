import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";

export class UserController {

    async index(req: Request, res: Response) {
        try {
            const users = await userRepository.find()
            return res.json(users)
        } catch (error) {
            console.log(error)
        }
    }
}