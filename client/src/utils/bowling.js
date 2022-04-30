const spareBonus = (rolls, rollIndex = 0) => {
  return 10 + rolls[rollIndex + 2];
};

const strikeBonus = (rolls, rollIndex = 0) => {
  return 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
};

const isSpare = (rolls, rollIndex = 0) => {
  return sumFrame(rolls, rollIndex) === 10;
};

const sumFrame = (rolls, rollIndex = 0) => {
  return rolls[rollIndex] + rolls[rollIndex + 1];
};

const isStrike = (rolls, rollIndex = 0) => {
  return rolls[rollIndex] === 10;
};

const initRolls = () => {
  const arr = new Array(10);
  for (let i = 0; i < 10; i++) {
    arr[i] = [];
  }
  return arr;
};

export default {
  sumFrame,
  spareBonus,
  strikeBonus,
  isSpare,
  isStrike,
  initRolls,
};
