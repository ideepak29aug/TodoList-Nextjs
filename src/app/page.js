'use client';
import Image from "next/image";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import ClientProvider from "./ClientProvider";

export default function Home() {
  return (
    <ClientProvider>
      <div className='w-screen h-screen bg-slate-700 flex justify-center items-start overflow-hidden'>
        <div className="max-w-5xl w-full py-8 flex flex-col justify-start items-center overflow-hidden">
          <h1 className="text-white text-3xl flex gap-2 justify-center items-center"><Image src='/favicon.png' alt="" width={50} height={40} /> TODO LIST</h1>
          <AddTodo />
          <Todo />
        </div>
      </div>
    </ClientProvider>

  );
}
