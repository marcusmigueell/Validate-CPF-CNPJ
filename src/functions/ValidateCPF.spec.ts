import { ValidateCPF } from "./ValidateCPF"

describe("Function Validation ValidateCPF", () => {

    let validateCPF: ValidateCPF;

    beforeAll(() => {
        validateCPF = new ValidateCPF();
    })

    it("First test with valid CPF", async () => {
        const data: string = "336.143.520-05";
        const validate = await validateCPF.run({data});

        expect(validate).toBe(true);
    });

    it("Second test with valid CPF", async () => {
        const data: string = "904.964.190-30";
        const validate = await validateCPF.run({data});

        expect(validate).toBe(true);
    });

    it("Third test with valid CPF", async () => {
        const data: string = "592.100.130-93";
        const validate = await validateCPF.run({data});

        expect(validate).toBe(true);
    });

    it("First test with invalid CPF", async () => {
        const data: string = "270.425.860-63";
        const validate = await validateCPF.run({data});

        expect(validate).toStrictEqual(new Error(`CPF ${data} é inválido`));
    });

    it("Second test with invalid CPF", async () => {
        const data: string = "591.206.760-70";
        const validate = await validateCPF.run({data});

        expect(validate).toStrictEqual(new Error(`CPF ${data} é inválido`));
    });

    it("Third test with invalid CPF", async () => {
        const data: string = "302.524.530-62";
        const validate = await validateCPF.run({data});

        expect(validate).toStrictEqual(new Error(`CPF ${data} é inválido`));
    });
});