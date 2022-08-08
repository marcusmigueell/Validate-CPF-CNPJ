import request from "supertest";
import { app } from "../src/app";

describe("Route validation", () => {
    it("Route validation passing valid CPF", async () => {
        const response = await request(app).get("/validate/33614352005");
        expect(response.statusCode).toEqual(200);
    });

    it("Route validation passing invalid CPF", async () => {
        const response = await request(app).get("/validate/27042586063");
        expect(response.statusCode).toEqual(400);
    });

    it("Route validation passing invalid character in CPF", async () => {
        const response = await request(app).get("/validate/90496a19030");
        expect(response.statusCode).toEqual(400);
    });

    it("Route validation passing invalid amount in CPF", async () => {
        const response = await request(app).get("/validate/904964190301");
        expect(response.statusCode).toEqual(400);
    });

    it("Route validation passing valid CNPJ", async () => {
        const response = await request(app).get("/validate/03849946000115");
        expect(response.statusCode).toEqual(200);
    });

    it("Route validation passing invalid CNPJ", async () => {
        const response = await request(app).get("/validate/17621805000181");
        expect(response.statusCode).toEqual(400);
    });

    it("Route validation passing invalid character in CNPJ", async () => {
        const response = await request(app).get("/validate/93b97511000195");
        expect(response.statusCode).toEqual(400);
    });

    it("Route validation passing invalid amount in CNPJ", async () => {
        const response = await request(app).get("/validate/074535484000173");
        expect(response.statusCode).toEqual(400);
    });
})