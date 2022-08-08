import { ValidateCNPJ } from "../src/functions/ValidateCNPJ"
import { Format } from "../src/functions/Format"

describe("Function Validation ValidateCNPJ", () => {

    let validateCNPJ: ValidateCNPJ;
    let format: Format;

    beforeAll(() => {
        validateCNPJ = new ValidateCNPJ();
        format = new Format();
    })

    it("First test with valid CNPJ", async () => {
        const data: string = "33572695000135";
        const validate = await validateCNPJ.run({data});

        expect(validate).toBe(true);
    });

    it("Second test with valid CNPJ", async () => {
        const data: string = "54385097000127";
        const validate = await validateCNPJ.run({data});

        expect(validate).toBe(true);
    });

    it("Third test with valid CNPJ", async () => {
        const data: string = "10829608000187";
        const validate = await validateCNPJ.run({data});

        expect(validate).toBe(true);
    });

    it("First test with invalid CNPJ", async () => {
        const data: string = "33572795000135";
        const validate = await validateCNPJ.run({data});

        expect(validate).toStrictEqual(new Error(`CNPJ ${await format.format({data})} is invalid!`));
    });

    it("Second test with invalid CNPJ", async () => {
        const data: string = "54385087000127";
        const validate = await validateCNPJ.run({data});

        expect(validate).toStrictEqual(new Error(`CNPJ ${await format.format({data})} is invalid!`));
    });

    it("Third test with invalid CNPJ", async () => {
        const data: string = "10829618000187";
        const validate = await validateCNPJ.run({data});

        expect(validate).toStrictEqual(new Error(`CNPJ ${await format.format({data})} is invalid!`));
    });
});