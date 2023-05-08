import './style.css';

const tasks = [
  {
    description: 'Learn Html',
    completed: false,
    index: 2,
  },
  {
    description: 'Learn CSS',
    completed: false,
    index: 1,
  },
  {
    description: 'Learn JavaScript',
    completed: false,
    index: 0,
  },
];

const viewTasks = () => {
  const container = document.querySelector('.task-list');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="check-box" type="checkbox">${task.description}`;
    container.appendChild(listItem);
  });
};

window.addEventListener('load', viewTasks);
