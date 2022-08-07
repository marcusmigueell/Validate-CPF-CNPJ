import request from "supertest";
import { app } from "../src/app";

describe("Route validation", () => {
    it("Route validation passing valid CPF", async () => {
        const response = await request(app).get("/validate/336.143.520-05");
        expect(response.statusCode).toEqual(200);
    });

    it("Route validation passing invalid CPF", async () => {
        const response = await request(app).get("/validate/270.425.860-63");
        expect(response.statusCode).toEqual(400);
    });
})