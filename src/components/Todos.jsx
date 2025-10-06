import { useState } from "react";

export default function Todos({todos}) {
    const [isChecked, setIsChecked] = useState(false);


    return (
        <ul className="w-xl h-full flex flex-col gap-3 mx-auto">
            {todos.map(todo => (
                    <div className={!isChecked 
                                    ? "flex justify-between w-full p-6 rounded-xl shadow-lg dark:bg-white/6 dark:shadow-2xl"
                                    : "line-through flex justify-between w-full p-6 rounded-xl shadow-lg dark:bg-white/6 dark:shadow-2xl"
                                    }
                    >
                        <input 
                            type="checkbox" 
                            name={todo.name} 
                            value={todo.name} 
                            onChange={(e) => setIsChecked(e.target.checked)} 
                        /> 
                        <li key={todo.id} className="text-xl capitalize">
                            { todo.name } 
                        </li>
                        <button className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-sm w-18 h-10'>Edit</button>
                    </div>
                ))
            }
        </ul>
    );
}