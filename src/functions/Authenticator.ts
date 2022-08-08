import { Format } from "./Format";

type ExecRequest = {
    data: string;
}

export class Authenticator {
    async execute({ data }: ExecRequest): Promise<Error | String> {
        
        if(data.length === 11 || data.length === 14) {
            if (!/^[0-9]{11,14}$/.test(data))
                return new Error(`There is an invalid character in the ${data.length > 11 ? 'CNPJ' : 'CPF'}!`);
        } else {
            return new Error("The number of characters is invalid!");
        }

        return await new Format().format({ data });
    }
}