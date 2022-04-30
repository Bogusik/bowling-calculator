<script setup>
import CalculatorHeader from "./components/CalculatorHeader.vue";
import BowlingSheet from "./components/BowlingSheet.vue";
import BowlingGamesHistory from "./components/BowlingGamesHistory.vue";
</script>

<template>
  <calculator-header />
  <main>
    <bowling-sheet />
    <bowling-games-history />
  </main>
</template>

<style>
* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  width: 1211px;
  margin: 30px auto;
}
</style>
