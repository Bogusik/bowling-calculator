import { defineStore } from "pinia";
import BowlingService from "../services/bowling.service";

const bowlingService = new BowlingService();

export const useBowlingGamesStore = defineStore({
  id: "bowlingGames",
  state: () => ({
    games: bowlingService.getGames(),
  }),
  actions: {
    async save(game) {
      this.games = await bowlingService.saveGame(game);
    },
    async load() {
      this.games = await bowlingService.getGames();
    },
  },
});
