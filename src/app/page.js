'use client';
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import ClientProvider from "./ClientProvider";

export default function Home() {
  return (
    <ClientProvider>
      <div className='w-screen h-screen bg-slate-700 flex justify-center items-start overflow-hidden'>
        <div className="max-w-5xl w-full py-8 flex flex-col justify-start items-center overflow-hidden">
          <div className="flex justify-center items-center gap-4">
            <img src='/logo.png' alt="" width={50} height={40} />
            <h1 className="text-white text-3xl"> TODO LIST</h1>
          </div>
          <AddTodo />
          <Todo />
        </div>
      </div>
    </ClientProvider>

  );
}
