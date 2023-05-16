import addNewTask from './addNewTask.js';

describe('Add task function', () => {
  test('Adds the new task object to the tasks array', () => {
    const tasksArray = [];
    const description = 'New task';

    const newObject = {
      description,
      completed: false,
      id: tasksArray.length,
    };

    const newArray = [];
    newArray.push(newObject);
    expect(addNewTask(description, tasksArray)).toEqual(newArray);
  });
});
