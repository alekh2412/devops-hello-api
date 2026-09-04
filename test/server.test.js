const request = require("supertest");
const app = require("../src/server");

describe("API Tests", () => {
  test("GET / should return hello message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello from DevOps!");
  });

  test("GET /health should return OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});