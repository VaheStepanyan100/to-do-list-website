import './style.css';
import viewTasks from '../modules/viewTasks.js';
import addNewTask from '../modules/addNewTask.js';
import deleteTask from '../modules/deleteTask.js';
import edittask from '../modules/edittask.js';
import taskStatusUpdate from '../modules/taskStatusUpdate.js';
import clearCompletedTasks from '../modules/clearCompletedTasks.js';

let tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
window.addEventListener('load', viewTasks(tasks));
const input = document.querySelector('.input');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    const description = input.value;
    tasks.push(addNewTask(description, tasks.length));
    viewTasks(tasks);
    input.value = '';
  }
});

document.addEventListener('click', (e) => {
  const deleteIcons = document.querySelectorAll('.delete-img');
  deleteIcons.forEach((icon, id) => {
    if (e.target === icon) {
      deleteTask(tasks, id);
      viewTasks(tasks);
    }
  });

  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach((task, id) => {
    if (e.target === task) {
      const parentLi = e.target.parentNode;
      parentLi.classList.add('edit');
      const oldTask = tasks[id]?.description;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.className = 'description edit';
      inputField.value = oldTask;
      task.innerText = '';
      task.appendChild(inputField);
      inputField.focus();

      inputField.addEventListener('blur', () => {
        const newTask = inputField.value;
        task.removeChild(inputField);
        task.innerText = newTask;
        edittask(tasks, id, newTask);
        viewTasks(tasks);
      });
    }
  });

  const checkBoxes = document.querySelectorAll('.check-box');
  checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener('change', () => {
      taskStatusUpdate(tasks, index);
      viewTasks(tasks);
    });
  });

  const clearBtn = document.querySelector('.clear');
  if (e.target === clearBtn) {
    tasks = clearCompletedTasks(tasks);
    viewTasks(tasks);
  }
});
