 import { ValidateCPF } from "../functions/ValidateCPF";
 import { ValidateCNPJ } from "../functions/ValidateCNPJ";

type ValidateRequest = {
    data: string;
}

export class ValidateService {
    async execute({ data }: ValidateRequest): Promise<Boolean | Error> {
        
        const validateCPF = new ValidateCPF();
        // const validateCNPJ = new ValidateCNPJ();
        
        var response: any;

        if(data.length >= 11 && data.length <= 14) {
            response = await validateCPF.run({ data });
        } else {
            // response = await validateCNPJ.run({ data });
        }
        
        return response;
    }
}