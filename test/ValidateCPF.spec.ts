import { ValidateCPF } from "../src/functions/ValidateCPF"
import { Format } from "../src/functions/Format"

describe("Function Validation ValidateCPF", () => {

    let validateCPF: ValidateCPF;
    let format: Format;

    beforeAll(() => {
        validateCPF = new ValidateCPF();
        format = new Format();
    })

    it("First test with valid CPF", async () => {
        const data: string = "33614352005";
        const validate = await validateCPF.run({data});

        expect(validate).toBe(true);
    });

    it("Second test with valid CPF", async () => {
        const data: string = "90496419030";
        const validate = await validateCPF.run({data});

        expect(validate).toBe(true);
    });

    it("Third test with valid CPF", async () => {
        const data: string = "59210013093";
        const validate = await validateCPF.run({data});

        expect(validate).toBe(true);
    });

    it("First test with invalid CPF", async () => {
        const data: string = "27042586063";
        const validate = await validateCPF.run({data});

        expect(validate).toStrictEqual(new Error(`CPF ${await format.format({data})} is invalid!`));
    });

    it("Second test with invalid CPF", async () => {
        const data: string = "59120676070";
        const validate = await validateCPF.run({data});

        expect(validate).toStrictEqual(new Error(`CPF ${await format.format({data})} is invalid!`));
    });

    it("Third test with invalid CPF", async () => {
        const data: string = "30252453062";
        const validate = await validateCPF.run({data});

        expect(validate).toStrictEqual(new Error(`CPF ${await format.format({data})} is invalid!`));
    });
});