import trash from '../assets/trash.svg';
import list from './list.js';

export default (tasks) => {
  const container = document.querySelector('.task-list');
  while (container.children[2]) {
    container.removeChild(container.children[2]);
  }

  tasks.sort((a, b) => a.id - b.id);

  tasks.forEach((task) => {
    list(container, task, trash);
  });

  localStorage.setItem('toDoList', JSON.stringify(tasks));
};
