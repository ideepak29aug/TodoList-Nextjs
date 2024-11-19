'use client'; 

import AddTodo from "../components/AddTodo";  
import Todo from "../components/Todo";   

export default function Dashboard() {
  return (
      <div className="max-w-5xl w-full py-8 flex flex-col justify-start items-center">
        <h1 className="text-white text-3xl flex gap-2 justify-center items-center"><img src='/favicon.png' className="w-12"/> TODO LIST</h1>
        <AddTodo />
        <Todo />
      </div>
  );
}
