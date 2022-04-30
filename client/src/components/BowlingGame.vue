<script setup>
import { onMounted, ref, watch } from "vue";
import BowlingTripleFrame from "./BowlingTripleFrame.vue";
import BowlingDoubleFrame from "./BowlingDoubleFrame.vue";
import BowlingService from "../services/bowling.service";

const frames = ref([]);
const totalScores = ref([]);
const selectedFrameId = ref(0);

const bowlingService = new BowlingService();

const props = defineProps({
  rolls: {
    type: Array,
    default: () => {
      const arr = new Array(10);
      for (let i = 0; i < 10; i++) {
        arr[i] = [];
      }
      return arr;
    },
  },
  active: {
    type: Boolean,
    default: true,
  },
});

onMounted(async () => {
  totalScores.value = await bowlingService.getTotalScores(props.rolls);
});

watch(props.rolls, async () => {
  totalScores.value = await bowlingService.getTotalScores(props.rolls);
});

const selectFrame = (id) => {
  if (!props.active) {
    return;
  }
  if (id <= selectedFrameId.value) {
    selectedFrameId.value = id;
    return;
  }
  if (
    (props.rolls[id - 1].length === 2 &&
      props.rolls[id - 1][0] &&
      props.rolls[id - 1][1]) ||
    (props.rolls[id - 1].length === 1 && props.rolls[id - 1][0] === 10)
  ) {
    selectedFrameId.value = id;
  }
};

defineExpose({
  frames,
  selectedFrameId,
  selectFrame,
});
</script>

<template>
  <div class="bowling-game flex">
    <bowling-double-frame
      :ref="
        (el) => {
          frames[i - 1] = el;
        }
      "
      :class="{ selected: i - 1 === selectedFrameId && props.active }"
      v-for="i in 9"
      :key="i"
      :totalScore="totalScores[i - 1] ? totalScores[i - 1].toString() : ''"
      :rolls="props.rolls[i - 1]"
      @click="selectFrame(i - 1)"
    />
    <bowling-triple-frame
      :ref="
        (el) => {
          frames[9] = el;
        }
      "
      :class="{ selected: 9 === selectedFrameId && props.active }"
      :totalScore="totalScores[9] ? totalScores[9].toString() : ''"
      :rolls="props.rolls[9]"
      @click="selectFrame(9)"
    />
  </div>
</template>

<style scoped>
@import url("../assets/main.css");

.bowling-game {
  border: 1px solid #98a0a9;
  border-radius: 5px;
  overflow: hidden;
  color: #1a1b1e;
  margin-bottom: 10px;
}

table:first-of-type {
  border-left: none;
}

.selected {
  background-color: #eaf3fb;
  color: #2882d2;
  font-weight: bold;
}
</style>
