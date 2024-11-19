import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: 'Welcome to TodoList! ' }],
  editTodo: null,
  textcopied: null
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    setEditTodo: (state, action) => {
      state.editTodo = action.payload; // Set the todo to be edited
    },
    clearEditTodo: (state) => {
      state.editTodo = null; // Clear the editing state
    },
    copytodo: (state, action) => {
      // Handling clipboard copy asynchronously
      navigator.clipboard.writeText(action.payload.text).then(() => {
        state.textcopied = action.payload.text; // Update state when copy is successful
      }).catch((error) => {
        console.error("Failed to copy text: ", error);
      });
    }
  }
});

export const { addTodo, removeTodo, updateTodo, setEditTodo, clearEditTodo, copytodo } = todoSlice.actions;
export default todoSlice.reducer;
