import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '@/app/features/todo/TodoSlice'; 

export const store = configureStore({
  reducer: {
    todo: todoReducer, 
  },
});
