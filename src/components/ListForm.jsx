import { useState } from "react";

let nextId = 0;

export default function ListForm() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    function handleInput(e) {
        if(e.target.value !== "") {
            setInput(e.target.value);
        }
    }

    function handleKeyPress(e) {
        if(e.key === "Enter") {
            handleSubmit();
        }
    }

    function handleSubmit() {
        setTodos([...todos, { id: nextId++, name: input}]);
        setInput('');
    }

    return(
        <div className="flex justify-between">
            <div className="list-form mx-auto flex max-w-xl items-center gap-x-4 rounded-xl p-6 shadow-lg dark:bg-white/6 dark:shadow-2xl">
                <h2>Add Todos</h2>
                <div className="w-full flex justify-evenly"> 
                    <input 
                        type="text" 
                        value={input}
                        className="w-xs h-15 border-2 border-violet-500 focus:outline-violet-500 text-lg"
                        onChange={handleInput}
                        onKeyDown={handleKeyPress}
                    >
                    </input>
                    <button 
                        className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-sm w-35 h-15'
                        onClick={handleSubmit}
                    > 
                        Send It!
                    </button>
                </div>
            </div>
            <div className="list-form mx-auto flex max-w-xl items-center gap-x-4 rounded-xl p-6 shadow-lg dark:bg-white/6 dark:shadow-2xl">
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        { todo.name }
                    </li>
                ))
            
                }
            </ul>
            </div>
        </div>
    );
}