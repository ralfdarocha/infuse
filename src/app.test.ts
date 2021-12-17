import request from 'supertest';
import app from './app';

describe("Test the app path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/app")
      .then((response: any) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the API data entry", () => {
  test("It should return the given word reversed", done => {
    request(app)
      .post("/data")
      .send({value: "Reverse me"})
      .then((response: any) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reversed).toBe("em esreveR");
        done();
      });
  });
});