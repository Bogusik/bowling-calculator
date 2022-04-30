const bowling = require("../src/bowling");

test("Test isSpare", () => {
  expect(bowling.isSpare([5, 5])).toBe(true);
  expect(bowling.isSpare([9, 1])).toBe(true);
  expect(bowling.isSpare([2, 4])).toBe(false);
  expect(bowling.isSpare([10])).toBe(false);
});

test("Test isStrike", () => {
  expect(bowling.isStrike([10])).toBe(true);
  expect(bowling.isStrike([9])).toBe(false);
  expect(bowling.isStrike([9, 10, 2, 10], 3)).toBe(true);
});

test("Test sumFrame", () => {
  expect(bowling.sumFrame([4, 5])).toBe(9);
  expect(bowling.sumFrame([0, 6])).toBe(6);
  expect(bowling.sumFrame([0, 6, 2, 5], 1)).toBe(8);
});

test("Test spareBonus", () => {
  expect(bowling.spareBonus([5, 5, 6])).toBe(16);
  expect(bowling.spareBonus([5, 5, 7, 8])).toBe(17);
  expect(bowling.spareBonus([5, 5])).toBe(NaN);
  expect(bowling.spareBonus([0, 5, 5, 6], 1)).toBe(16);
  expect(bowling.spareBonus([5, 5, 5, 2], 1)).toBe(12);
  expect(bowling.spareBonus([2, 5, 5], 1)).toBe(NaN);
});

test("Test strikeBonus", () => {
  expect(bowling.strikeBonus([10, 5])).toBe(NaN);
  expect(bowling.strikeBonus([10, 5, 6, 4])).toBe(21);
  expect(bowling.strikeBonus([5, 10, 6, 4], 1)).toBe(20);
  expect(bowling.strikeBonus([5, 0, 10, 4], 2)).toBe(NaN);
  expect(bowling.strikeBonus([5, 0, 0, 10], 3)).toBe(NaN);
});

test("Test bowlingScore", () => {
  expect(bowling.bowlingScore([10, 5], 2)).toBe(NaN);
  expect(bowling.bowlingScore([5, 5], 1)).toBe(NaN);
  expect(bowling.bowlingScore([5, 4], 1)).toBe(9);
  expect(bowling.bowlingScore([10, 4, 6, 4, 0], 3)).toBe(38);
  expect(
    bowling.bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10)
  ).toBe(300);
  expect(bowling.bowlingScore([4, 6, 5, 4], 2)).toBe(24);
});
