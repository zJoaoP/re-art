import removeDuplicates from '../../helpers/removeDuplicates';

const mock = [
  { id: 1, name: 'Joao' },
  { id: 2, name: 'Pedro' },
  { id: 1, name: 'Brito' },
  { id: 3, name: 'Brito' },
];

test('if it returns an empty object', () => {
  const emptyArray = [];
  const emptyWithoutDuplicates = removeDuplicates(emptyArray);
  expect(emptyWithoutDuplicates).toStrictEqual(emptyArray);
});

test('if it works with default key', () => {
  const result = removeDuplicates(mock);
  expect(result).toStrictEqual([
    { id: 1, name: 'Joao' },
    { id: 2, name: 'Pedro' },
    { id: 3, name: 'Brito' },
  ]);
});

test('if it works with another key', () => {
  const result = removeDuplicates(mock, 'name');
  expect(result).toStrictEqual([
    { id: 1, name: 'Joao' },
    { id: 2, name: 'Pedro' },
    { id: 1, name: 'Brito' },
  ]);
});
