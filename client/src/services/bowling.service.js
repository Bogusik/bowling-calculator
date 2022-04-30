import config from "../../../config";

export default class BowlingService {
  async getGames() {
    try {
      const response = await fetch(config.apiUrl + "/games");
      const jsonBody = await response.json();
      return jsonBody.games;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  async saveGame(game) {
    try {
      const response = await fetch(config.apiUrl + "/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ game }),
      });
      const jsonBody = await response.json();
      return jsonBody.games;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  async getTotalScores(rolls) {
    try {
      const response = await fetch(config.apiUrl + "/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rolls }),
      });
      const jsonBody = await response.json();
      return jsonBody.scores;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
