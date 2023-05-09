import trash from '../assets/trash.svg';

export default (tasks) => {
  const container = document.querySelector('.task-list');
  while (container.children[2]) {
    container.removeChild(container.children[2]);
  }

  tasks.sort((a, b) => a.id - b.id);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="check-box" type="checkbox"><p class="description">${task.description}</p><a class="delete-icon"><img class="delete-img" src="${trash}" alt="trash"></a>`;
    container.appendChild(listItem);
  });

  localStorage.setItem('toDoList', JSON.stringify(tasks));
};
