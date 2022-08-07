type RunRequest = {
    data: string;
}

export class ValidateCPF {
    async run({ data }: RunRequest): Promise<Boolean | Error> {
        
        const formatData = data.replace(/[^0-9]/g,'');

        const primeiroCalc = formatData.substring(0,9);
        const primeiroDigit = parseInt(formatData.substring(9,10));

        const segundoCalc = formatData.substring(1,10);
        const segundoDigit = parseInt(formatData.substring(10,11));

        var contador: number = 1;
        var somatorio: number = 0;
        var primeiroDV: number = 0;
        var segundooDV: number = 0;

        for (const iterator of primeiroCalc) {
            somatorio += parseInt(iterator) * contador;
            contador++;
        }

        primeiroDV = somatorio % 11 == 10 ? 0 : somatorio % 11;

        somatorio = 0;
        contador = 1;

        for (const iterator of segundoCalc) {
            somatorio += parseInt(iterator) * contador;
            contador++;
        }

        segundooDV = somatorio % 11 == 10 ? 0 : somatorio % 11;

        if (primeiroDV === primeiroDigit && segundooDV === segundoDigit)
            return true;
        else
            return new Error(`CPF ${data} é inválido`);

    }
}