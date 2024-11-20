'use client'; 

import { React, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, clearEditTodo } from '../features/todo/TodoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const editTodo = useSelector((state) => state.todo.editTodo);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
      inputRef.current?.focus(); // Focus on the input when editing a todo
    }
  }, [editTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      // Optional: Instead of alert, you could use a UI-friendly validation message
      return;
    }
    if (editTodo) {
      dispatch(updateTodo({ id: editTodo.id, text: input.trim() }));
      dispatch(clearEditTodo()); // Clear edit state after update
    } else {
      dispatch(addTodo(input.trim()));
    }
    setInput(''); // Clear the input field
    inputRef.current?.focus(); // Keep the focus on the input field after adding/updating a todo
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center items-center">
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 max-w-96 w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input value
      />
      <button
        type="submit"
        disabled={!input.trim()} // Disable button if input is empty
        className="text-white select-none bg-indigo-500 border-0 py-2 w-48 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default AddTodo;
