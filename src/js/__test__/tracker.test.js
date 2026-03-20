import Tracker from '../Tracker';

const testTracker = new Tracker();

test('Метод drawUI формирует ошибку', () => {
  testTracker.container = null;
  expect(() => testTracker.drawUI()).toThrow(new Error('container not bind to DOM'));
});

test('Метод checkBinding формирует ошибку', () => {
  expect(() => testTracker.checkBinding()).toThrow();
});
