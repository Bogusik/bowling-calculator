const supertest = require("supertest");
const { app } = require("../src/app");

const request = supertest(app);

test("Test calculate with empty aray", async () => {
  let response = await request
    .post("/calculate")
    .send({ rolls: [[], [], [], [], [], [], [], [], [], []] })
    .expect(200);
  expect(response.body.scores).toEqual(new Array(10).fill(null));
});

test("Test calculate with strike, spare, and 4, 0 in next frame", async () => {
  let response = await request
    .post("/calculate")
    .send({ rolls: [[10], [6, 4], [4, 0], [], [], [], [], [], [], []] })
    .expect(200);
  expect(response.body.scores).toEqual([
    20,
    34,
    38,
    ...new Array(7).fill(null),
  ]);
});

test("Test calculate with all strikes", async () => {
  let response = await request
    .post("/calculate")
    .send({ rolls: [...new Array(9).fill([10]), [10, 10, 10]] })
    .expect(200);
  expect(response.body.scores).toEqual([
    30, 60, 90, 120, 150, 180, 210, 240, 270, 300,
  ]);
});

test("Test calculate with all fives", async () => {
  let response = await request
    .post("/calculate")
    .send({ rolls: [...new Array(9).fill([5, 5]), [5, 5, 5]] })
    .expect(200);
  expect(response.body.scores).toEqual([
    15, 30, 45, 60, 75, 90, 105, 120, 135, 150,
  ]);
});

test("Test calculate with all 0", async () => {
  let response = await request
    .post("/calculate")
    .send({ rolls: [...new Array(9).fill([0, 0]), [0, 0, 0]] })
    .expect(200);
  expect(response.body.scores).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test("Test calculate 3 strikes, no values after", async () => {
  let response = await request
    .post("/calculate")
    .send({ rolls: [...new Array(3).fill([10]), ...new Array(7).fill([])] })
    .expect(200);
  expect(response.body.scores).toEqual([30, ...new Array(9).fill(null)]);
});

test("Test calculate frames with no strikes, no spares", async () => {
  let response = await request
    .post("/calculate")
    .send({
      rolls: [
        [3, 2],
        [4, 5],
        [2, 2],
        [4, 3],
        [1, 3],
        [4, 4],
        [5, 2],
        [3, 3],
        [6, 1],
        [5, 0],
      ],
    })
    .expect(200);
  expect(response.body.scores).toEqual([5, 14, 18, 25, 29, 37, 44, 50, 57, 62]);
});
