<script setup>
const props = defineProps({
  inputRange: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex">
    <button
      class="roll-input-button"
      v-for="i in props.inputRange"
      :key="i"
      @click.prevent="$emit('score-update', i)"
    >
      {{ i }}
    </button>
  </div>
</template>

<style scoped>
@import url("../assets/main.css");

.roll-input-button {
  width: 40px;
  margin: 10px 5px;
}

.roll-input-button:first-of-type {
  margin-left: 0;
}
</style>
