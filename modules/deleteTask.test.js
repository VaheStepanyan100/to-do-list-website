import deleteTask from './deleteTask.js';

describe('Delete task function', () => {
  test('Delete a task from the tasks array', () => {
    const tasksArray = [
      {
        description: 'Task one',
        completed: false,
        id: 0,
      },
      {
        description: 'Task two',
        completed: false,
        id: 1,
      },
      {
        description: 'Task three',
        completed: false,
        id: 2,
      },
    ];
    const newArray = [
      {
        description: 'Task one',
        completed: false,
        id: 0,
      },
      {
        description: 'Task three',
        completed: false,
        id: 1,
      },
    ];
    expect(deleteTask(tasksArray, 1)).toEqual(newArray);
  });
});
