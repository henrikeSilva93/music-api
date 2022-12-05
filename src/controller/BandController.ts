import { Request, Response } from "express";
import { bandRepository } from "../repositories/BandRepository";

export class BandController {
    async index(req: Request, res: Response) {
        try {
            const bands = await bandRepository.find({
                relations: {
                    artists:true
                }
            })
            res.json(bands)
        } catch (error) {
            console.log(error)
        }
    }
}