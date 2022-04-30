const supertest = require("supertest");
const { app, getGames, setGames } = require("../src/app");

const request = supertest(app);

afterEach(() => {
  setGames([]);
});

test("Test GET /games with empty array", async () => {
  expect(getGames()).toEqual([]);
  let response = await request.get("/games").send();
  expect(response.body.games).toEqual([]);
});

test("Test GET /games with array full of [3, 3]", async () => {
  expect(getGames()).toEqual([]);
  const arrayOfThrees = [...new Array(10).fill([3, 3])];
  setGames([arrayOfThrees]);
  let response = await request.get("/games").send();
  expect(response.body.games).toEqual([arrayOfThrees]);
});

test("Test GET /games with two games", async () => {
  expect(getGames()).toEqual([]);
  const arrayOfThrees = [...new Array(10).fill([3, 3])];
  const arrayOfFours = [...new Array(10).fill([4, 4])];
  setGames([arrayOfThrees, arrayOfFours]);
  let response = await request.get("/games").send();
  expect(response.body.games).toEqual([arrayOfThrees, arrayOfFours]);
});

test("Test POST /games", async () => {
  expect(getGames()).toEqual([]);
  const arrayOfFivesAndFours = [...new Array(10).fill([5, 4])];
  let response = await request
    .post("/games")
    .send({ game: arrayOfFivesAndFours })
    .expect(200);
  expect(response.body.games).toEqual([arrayOfFivesAndFours]);
  expect(getGames()).toEqual([arrayOfFivesAndFours]);
});
