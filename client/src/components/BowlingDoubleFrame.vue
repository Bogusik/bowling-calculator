<script setup>
import { computed } from "vue";

import bowling from "../utils/bowling";

const props = defineProps({
  rolls: {
    type: Array,
    default: () => [],
  },
  totalScore: {
    type: String,
    default: "",
  },
});

const frameCellValues = computed(() => {
  let cellValues = [" ", " "];
  if (props.rolls.length === 1) {
    cellValues[0] = bowling.isStrike(props.rolls) ? "X" : props.rolls[0];
  } else if (props.rolls.length === 2) {
    if (bowling.isSpare(props.rolls)) {
      cellValues[1] = "/";
    } else {
      cellValues = props.rolls;
    }
  }
  return cellValues;
});

const possibleInputs = computed(() => {
  if (props.rolls.length === 1) {
    if (bowling.isStrike(props.rolls)) {
      return [];
    }
    return [...Array(parseInt(10 - props.rolls[0] + 1)).keys()];
  } else if (props.rolls.length === 0) {
    return [...Array(11).keys()];
  }
  return [];
});

defineExpose({ frameCellValues, possibleInputs });
</script>

<template>
  <table class="double-frame" @click="$emit('click')">
    <tr>
      <td>{{ frameCellValues[0] }}</td>
      <td>{{ frameCellValues[1] }}</td>
    </tr>
    <tr>
      <td colspan="2">{{ props.totalScore ?? "" }}</td>
    </tr>
  </table>
</template>

<style scoped>
@import url("../assets/frames.css");
</style>
