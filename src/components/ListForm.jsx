import { useState } from "react";
import Todos from "./Todos";

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
        if(input) {
            setTodos([...todos, { id: nextId++, name: input}]);
            setInput('');
        }
    }

    return(
        <div className="flex flex-wrap gap-2">
            <div className="flex flex-col justify-evenly h-85 mx-auto w-xl items-center rounded-xl p-6 shadow-lg dark:bg-white/6 dark:shadow-2xl">
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
            {todos.length > 0 &&
                <Todos 
                    todos={todos}
                /> 
            }  
        </div>
    );
}