type FormatRequest = {
    data: string;
}

export class Format {
    async format({ data }: FormatRequest): Promise<any | String> {

        var result: string;

        if(data.length === 11)
            return result = data.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        
        return result = data.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
}