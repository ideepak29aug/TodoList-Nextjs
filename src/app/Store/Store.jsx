import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TodoSlice'; // Corrected import path and use default import

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Ensure this matches the state slice defined in your TodoSlice
  },
});
