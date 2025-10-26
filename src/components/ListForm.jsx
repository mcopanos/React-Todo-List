import { useState } from "react";
import Input from "./input";

let nextId = 0;

export default function ListForm() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    function handleInput(e) {
        if(e.target.value !== " ") {
            setInput(e.target.value);
        }
    }

    function handleKeyPress(e) {
        if(e.key === "Enter") {
            handleSubmit();
        }
    }

    function handleSubmit() {
        if(input) {
            setTodos([...todos, { id: nextId++, name: input, isComplete: false, dblClick: false}]);
            setInput('');
        }
    }

    function toggleTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    }

    function handleDblClick(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, dblClick: !todo.dblClick } : todo
            )
        );
    }

    function editTodo(id, e) {
        if (e.target.value && e.key === "Enter") {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, name: e.target.value, dblClick: !todo.dblClick }
                    : todo
                )
            );
        }
    }

    return(
        <div className="flex flex-wrap gap-2">
            <div className="flex flex-col justify-evenly h-85 mx-auto w-xl items-center rounded-xl p-6 shadow-lg dark:bg-white/6 dark:shadow-2xl">
                <h2>Add Todos</h2>
                <div className="w-full flex flex-wrap justify-evenly gap-2"> 
                    <Input 
                        value={input}
                        change={handleInput}
                        keyDown={handleKeyPress}
                    />
                    <button 
                        className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-sm h-15 w-xs md:w-35'
                        onClick={handleSubmit}
                    > 
                        Send It!
                    </button>
                </div>
            </div>
            {todos.length > 0 &&
                <ul className="w-xl h-full flex flex-col gap-3 mx-auto">
                    {todos.map(todo => (
                            <li key={todo.id} className="flex justify-between items-center w-full p-6 rounded-xl shadow-lg dark:bg-white/6 dark:shadow-2xl text-lg capitalize">
                                <input 
                                    type="checkbox" 
                                    name={todo.name} 
                                    value={todo.name} 
                                    onClick={() => toggleTodo(todo.id, todo.isComplete)}
                                /> 
                                <div onDoubleClick={() => handleDblClick(todo.id)} className="flex self-center cursor-pointer" title="Double click to edit">
                                {!todo.dblClick 
                                    ?<p className={todo.isComplete ? 'line-through' : undefined}>{ todo.name }</p> 
                                    :<textarea 
                                        className="resize-none text-center outline-none overflow-hidden"
                                        autoFocus
                                        type="text"
                                        name="textarea"
                                        wrap="off"
                                        rows="1"
                                        cols="20"
                                        onKeyDown={(e) => editTodo(todo.id, e)}
                                    >{todo.name}</textarea>
                                }
                                </div>
                                <button 
                                    className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-sm w-18 h-10'
                                    onClick={() => setTodos(todos.filter((t) =>  t.id !== todo.id ))}
                                >Delete</button>
                            </li>
                        ))
                    }
                </ul>
            }  
        </div>
    );
}