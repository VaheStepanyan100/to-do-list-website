export default (tasks, id) => {
  tasks.splice(id, 1);
  let i = id;
  while (i < tasks.length) {
    tasks[i].id = i;
    i += 1;
  }
  return tasks;
};
