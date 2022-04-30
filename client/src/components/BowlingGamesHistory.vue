<script setup>
import { ref, onMounted } from "vue";
import BowlingGame from "./BowlingGame.vue";
import { useBowlingGamesStore } from "../stores/bowlingGames";

const game = ref(null);

const bowlingStore = useBowlingGamesStore();

onMounted(() => bowlingStore.load());
</script>

<template>
  <div v-if="bowlingStore.games && bowlingStore.games.length">
    <h2>Your games</h2>
    <hr />
    <div class="flex bowling-games-history-sheet">
      <bowling-game
        ref="game"
        :rolls="game"
        v-for="game in bowlingStore.games"
        :active="false"
        :key="game"
      />
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/main.css");

.selected {
  background-color: aqua;
}

.save-button {
  margin-top: 10px;
  float: right;
}

.bowling-games-history-sheet {
  flex-direction: column;
}
</style>
