export const addCategory = data => ({
  type: 'ADD_CATEGORY',
  data,
});

export const deleteCategory = id => ({
  type: 'DELETE_CATEGORY',
  id,
});

export const addTask = data => ({
  type: 'ADD_TASK',
  data,
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id,
});
