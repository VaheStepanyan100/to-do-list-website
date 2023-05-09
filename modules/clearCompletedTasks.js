export default (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  let i = 0;
  tasks.forEach((task) => {
    task.id = i;
    i += 1;
  });
  return tasks;
};
