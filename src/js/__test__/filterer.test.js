import Filterer from '../Filterer';

const filter = new Filterer();
const arr = [
  { taskName: 'hobby', pinned: false },
  { taskName: 'Homework', pinned: false },
  { taskName: 'dance', pinned: false },
  { taskName: 'lunch', pinned: false }
];

test('Метод clean убрает пробелы в начале/конце строки', () => {
  expect(filter.clean('  Гулять   ')).toBe('Гулять');
});

test('Метод byFirstChar возвращает массив объектов, где свойства taskName начинаются с переданного символа', () => {
  expect(filter.byFirstChar(arr, 'h')).toEqual([
    { taskName: 'hobby', pinned: false },
    { taskName: 'Homework', pinned: false }
  ]);
  expect(filter.byFirstChar(arr, 'd')).toEqual([{ taskName: 'dance', pinned: false }]);
});
