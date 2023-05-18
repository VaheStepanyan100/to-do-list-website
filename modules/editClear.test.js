/**
 * @jest-environment jsdom
 */

import clearCompletedTasks from './clearCompletedTasks.js';
import edittask from './edittask.js';
import list from './list.js';
import taskStatusUpdate from './taskStatusUpdate.js';

describe('Edit task', () => {
  let tasks = [];
  const newTask = {
    description: 'New task',
    completed: false,
    id: tasks.length + 1,
  };

  test('Clear completed test', () => {
    document.body.innerHTML = `
      <ul class="task-list">
      <li class="list-item">Today's To Do</li>
      <li class="list-item">
        <input class="input" type="text" placeholder="Add to your list...">
      </li>
      </ul>
      <a class="clear">Clear all completed</a>
    `;

    let i = 0;
    while (i < 8) {
      const newTask = { description: `Task ${i}`, completed: i % 2 !== 0 };
      tasks.push(newTask);
      i += 1;
    }

    const container = document.querySelector('.task-list');
    tasks.forEach((task) => {
      list(container, task, '#');
    });

    tasks = clearCompletedTasks(tasks);
    while (container.children[2]) {
      container.removeChild(container.children[2]);
    }
    tasks.forEach((task) => {
      list(container, task, '#');
    });

    const taskItems = document.querySelectorAll('.description');

    expect(taskItems).toHaveLength(4);
  });

  test('Toggle completed status', () => {
    newTask.completed = false;
    tasks.push(newTask);
    taskStatusUpdate(tasks, 0);
    expect(tasks[0].completed).toBe(true);
  });
  test('Edit task and update tasks array', () => {
    tasks.push(newTask);
    edittask(tasks, 0, 'Go shopping'); 
    expect(tasks[0].description).toBe('Go shopping');
  });
});
