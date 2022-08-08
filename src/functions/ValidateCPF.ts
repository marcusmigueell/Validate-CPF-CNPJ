import { Format } from "./Format";

type RunRequest = {
    data: string;
}

export class ValidateCPF {
    async run({ data }: RunRequest): Promise<Boolean | Error> {

        const firstCalc = data.substring(0,9).split('');
        const firstDigit = parseInt(data.substring(9,10));

        const secondCalc = data.substring(0,10).split('');
        const secondDigit = parseInt(data.substring(10,11));

        var counter: number = 10;
        var summation: number;
        var firstDV: number;
        var secondDV: number;
        var rest: number;

        summation = firstCalc.reduce((acc, current) => {
            const sum = Number(current) * counter;
            counter--;
            return acc + sum;
        }, 0);
        
        rest = 11 - (summation % 11);
        firstDV = rest >= 10 ? 0 : rest;
        
        counter = 11;

        summation = secondCalc.reduce((acc, current) => {
            const sum = Number(current) * counter;
            counter--;
            return acc + sum;
        }, 0);
        
        rest = 11 - (summation % 11);
        secondDV = rest >= 10 ? 0 : rest;

        if (firstDV === firstDigit && secondDV === secondDigit)
            return true;
        else
            return new Error(`CPF ${await new Format().format({ data })} is invalid!`);
    }
}