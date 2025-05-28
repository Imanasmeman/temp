import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.items;

export const selectSortedTasks = createSelector([selectTasks], (tasks) =>
  [...tasks].sort((a, b) => (b.urgency || 0) - (a.urgency || 0))
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload.map((task) => ({
        ...task,
        urgency: task.urgency ?? Math.floor(Math.random() * 5) + 1,
      }));
    },
    updateTask: (state, action) => {
      const updated = action.payload;
      const index = state.items.findIndex((t) => t.id === updated.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updated };
      }
    },
  },
});

export const { setTasks, updateTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
