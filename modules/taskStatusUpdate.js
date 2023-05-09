export default (tasks, id) => {
  tasks[id].completed = !tasks[id].completed;
};
