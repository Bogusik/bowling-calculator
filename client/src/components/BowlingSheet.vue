<script setup>
import { ref, reactive, computed, nextTick } from "vue";

import BowlingGame from "./BowlingGame.vue";
import RollInput from "./RollInput.vue";

import { useBowlingGamesStore } from "../stores/bowlingGames";
import bowling from "../utils/bowling";

const game = ref(null);
const rolls = reactive(bowling.initRolls());

const bowlingStore = useBowlingGamesStore();

const rollPossibleInputs = computed(() => {
  const possibleInputs =
    game.value.frames[game.value.selectedFrameId].possibleInputs;
  return possibleInputs.length ? possibleInputs : [...new Array(11).keys()];
});

const onScoreUpdate = (value) => {
  if (!game.value.frames[game.value.selectedFrameId].possibleInputs.length) {
    rolls[game.value.selectedFrameId] = [];
  }
  rolls[game.value.selectedFrameId].push(value);
  nextTick(() => {
    if (
      game.value.frames[game.value.selectedFrameId].possibleInputs.length ===
        0 &&
      game.value.selectedFrameId < 9
    ) {
      game.value.selectedFrameId++;
    }
  });
};

const clearRolls = () => {
  game.value.selectedFrameId = 0;
  for (let i = 0; i < 10; i++) {
    rolls[i] = [];
  }
};
</script>

<template>
  <div>
    <div v-if="game && game.frames && game.frames.length" class="flex">
      <roll-input
        :inputRange="rollPossibleInputs"
        @score-update="onScoreUpdate"
      />
      <button @click="clearRolls">Clear</button>
    </div>
    <div class="flex">
      <bowling-game ref="game" :rolls="rolls" />
    </div>
    <div class="flex save-button-wrapper">
      <button @click="bowlingStore.save(rolls)">Save</button>
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

.save-button-wrapper {
  justify-content: end;
}
</style>
