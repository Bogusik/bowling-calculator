const bowlingScore = (rolls, numberOfFrames) => {
  let score = 0;
  let rollIndex = 0;
  for (let frameIndex = 0; frameIndex < numberOfFrames; frameIndex++) {
    if (isStrike(rolls, rollIndex)) {
      score += strikeBonus(rolls, rollIndex);
      rollIndex++;
      continue;
    }

    if (isSpare(rolls, rollIndex)) {
      score += spareBonus(rolls, rollIndex);
    } else {
      score += sumFrame(rolls, rollIndex);
    }
    rollIndex += 2;
  }

  return score;
};

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

module.exports = {
  bowlingScore,
  sumFrame,
  spareBonus,
  strikeBonus,
  isSpare,
  isStrike,
};
