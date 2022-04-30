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
  let cellValues = [" ", " ", " "];
  if (props.rolls.length === 1) {
    cellValues[0] = props.rolls[0];
  } else if (props.rolls.length > 1) {
    if (bowling.isSpare(props.rolls)) {
      cellValues[0] = props.rolls[0];
      cellValues[1] = "/";
      if (props.rolls.length === 3) {
        cellValues[2] = props.rolls[2];
      }
    } else {
      cellValues = props.rolls;
    }
  }
  return cellValues;
});

const possibleInputs = computed(() => {
  if (props.rolls.length === 2) {
    if (props.rolls[0] === 10) {
      if (!bowling.isStrike(props.rolls)) {
        return [...Array(10 - props.rolls[1] + 1).keys()];
      }
      return [...Array(11).keys()];
    } else if (bowling.isSpare(props.rolls)) {
      return [...Array(11).keys()];
    }
    return [];
  } else if (props.rolls.length === 1) {
    if (props.rolls[0] === 10) {
      return [...Array(11).keys()];
    }
    return [...Array(10 - props.rolls[0] + 1).keys()];
  } else if (props.rolls.length === 0) {
    return [...Array(11).keys()];
  }
  return [];
});

defineExpose({ frameCellValues, possibleInputs });
</script>

<template>
  <table class="triple-frame">
    <tr>
      <td>{{ frameCellValues[0] === 10 ? "X" : frameCellValues[0] }}</td>
      <td>{{ frameCellValues[1] === 10 ? "X" : frameCellValues[1] }}</td>
      <td>{{ frameCellValues[2] === 10 ? "X" : frameCellValues[2] }}</td>
    </tr>
    <tr>
      <td colspan="3">{{ props.totalScore ?? "" }}</td>
    </tr>
  </table>
</template>

<style scoped>
@import url("../assets/frames.css");
</style>
