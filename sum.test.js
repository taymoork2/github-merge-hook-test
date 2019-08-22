// Copyright 2004-present Facebook. All Rights Reserved.

const sum = require('./sum');

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});
