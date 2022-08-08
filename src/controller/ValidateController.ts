import { Request, Response } from "express";
import { ValidateService } from "../services/ValidateService";
import { Authenticator } from "../functions/Authenticator";

export class ValidateController {
    async handle(req: Request, res: Response) {
        
        let { data } = req.params;  

        const auth = new Authenticator();
        const validation = await auth.execute({ data });
        
        if(validation instanceof Error)
            return res.status(400).json(validation.message);

        const service = new ValidateService();

        const result = await service.execute({ data });
        
        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(`${data.length === 11 ? 'CPF' : 'CNPJ'} ${validation} is valid!`);
    }
}