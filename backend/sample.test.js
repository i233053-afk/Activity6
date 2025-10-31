const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('fails if numbers don’t add up', () => {
  expect(sum(2, 2)).not.toBe(5);
});
