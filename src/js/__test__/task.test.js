import Task from '../Task';

const task = new Task('Утренняя зарядка');

test('Экземпляр класса содержит корректные свойства', () => {
  expect(task.taskName).toBe('Утренняя зарядка');
  expect(task.pinned).toBeFalsy();
});
