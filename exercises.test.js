const exercises = require('./exercises');

test('Question 1: octalToDecimal', () => {
  expect(exercises.octalToDecimal('1')).toEqual(1);
  expect(exercises.octalToDecimal('10')).toEqual(8);
  expect(exercises.octalToDecimal('130')).toEqual(88);
  expect(exercises.octalToDecimal('17')).toEqual(15);
  expect(exercises.octalToDecimal('2047')).toEqual(1063);
  expect(exercises.octalToDecimal('11')).toEqual(9);
});

