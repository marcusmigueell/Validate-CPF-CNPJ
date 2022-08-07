import { Request, Response } from "express";
import { ValidateService } from "../services/ValidateService";

export class ValidateController {
    async handle(req: Request, res: Response) {
        
        const { data } = req.params;

        const service = new ValidateService();

        const result = await service.execute({ data });
        
        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(`CPF ${data} é válido`);
    }
}