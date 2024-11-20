'use client'
import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setEditTodo, copytodo } from '../features/todo/TodoSlice';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaCopy } from "react-icons/fa";

const Todo = () => {
    const todos = useSelector(state => state.todo.todos);
    // const textcopied = useSelector((state) => state.todo.textcopied);
    const dispatch = useDispatch();

    const [copied, setCopied] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 7;

    const indexOfFirstItem = rowsPerPage * currentPage;
    const indexOfLastItem = indexOfFirstItem + rowsPerPage;
    const currentItems = todos.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(todos?.length / rowsPerPage);

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        if (currentItems.length === 0 && currentPage >= 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentItems, currentPage]);

    const handleCopy = (todo) => {
        navigator.clipboard.writeText(todo.text)
            .then(() => {
                console.log("Text copied to clipboard:", todo.text);
                setCopied(true); // Update the `copied` state
            })
            .catch((err) => {
                console.error("Failed to copy text:", err);
            });
    };
    
    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false); // Reset `copied` after 2 seconds
            }, 2000);
    
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [copied]); // Dependency on `copied`
    

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <ul className='list-none w-full flex flex-col justify-center items-center'>
                {currentItems.map((todo) => (
                    <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-full' key={todo.id}>
                        <div className='text-white'>
                            {todo.text.length > 80 ? todo.text.slice(0, 80) + '...' : todo.text}
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <button 
                                className='border-0 py-2 px-2 hover:text-blue-600 bg-blue-600 rounded hover:bg-zinc-800 duration-300' 
                                title='Copy'
                                onClick={() => handleCopy(todo)}
                            >
                                <FaCopy />
                            </button>
                            <button
                                className='text-white select-none bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded'
                                onClick={() => dispatch(setEditTodo(todo))}
                            >
                                Update
                            </button>
                            <button
                                className='text-white select-none bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded'
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            
            {/* Pagination */}
            <div className={todos.length < rowsPerPage + 1 ? 'hidden' : 'w-[80%] flex flex-row justify-between items-center mt-12'}>
                <button
                    disabled={currentPage === 0}
                    onClick={handlePrev}
                    className='text-white select-none bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex flex-row justify-center items-center gap-2'>
                    <FaAngleDoubleLeft />
                    <span>Previous</span>
                </button>
                <span className='text-white text-2xl'>{currentPage + 1}/{totalPages}</span>
                <button
                    disabled={currentPage + 1 === totalPages}
                    onClick={handleNext}
                    className='text-white select-none bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex flex-row justify-center items-center gap-2'>
                    <span>Next</span>
                    <FaAngleDoubleRight />
                </button>
            </div>

            {/* Copied Alert */}
            <div className={`${copied ? 'right-8 ' : '-right-32'} transition-all duration-200 fixed bottom-4 py-1 px-3 bg-white rounded text-black`}>
                Text copied!
            </div>
        </div>
    );
};

export default Todo;
