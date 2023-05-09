export default (taskDescription, arrayLength) => {
  const newTask = {
    description: taskDescription,
    completed: false,
    id: arrayLength,
  };
  return newTask;
};
