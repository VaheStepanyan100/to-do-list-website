export default (taskDescription, tasks) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    id: tasks.length,
  };
  tasks.push(newTask);

  return tasks;
};
