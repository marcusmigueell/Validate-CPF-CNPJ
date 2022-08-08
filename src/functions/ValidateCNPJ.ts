import { Format } from "./Format";

type RunRequest = {
    data: string;
}

export class ValidateCNPJ {
    async run({ data }: RunRequest)/*: Promise<Number | Error>*/ {

        const firstCalc = data.substring(0,12).split('').reverse();
        const firstDigit = parseInt(data.substring(12,13));

        const secondCalc = data.substring(0,13).split('').reverse();
        const secondDigit = parseInt(data.substring(13,14));

        var counter: number = 2;
        var summation: number;
        var firstDV: number;
        var secondDV: number;
        var rest: number;

        summation = firstCalc.reduce((acc, current) => {
            const sum = Number(current) * counter;
            counter = counter === 9 ? 2 : counter + 1;
            return acc + sum;
        }, 0);

        rest = 11 - (summation % 11);
        firstDV = rest >= 10 ? 0 : rest;

        counter = 2;

        summation = secondCalc.reduce((acc, current) => {
            const sum = Number(current) * counter;
            counter = counter === 9 ? 2 : counter + 1;
            return acc + sum;
        }, 0);

        rest = 11 - (summation % 11);
        secondDV = rest >= 10 ? 0 : rest;
        
        if (firstDV === firstDigit && secondDV === secondDigit)
            return true;
        else
            return new Error(`CNPJ ${await new Format().format({ data })} is invalid!`);
    }
}