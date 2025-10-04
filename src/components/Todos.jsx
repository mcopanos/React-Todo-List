export default function Todos({todos}) {
    return (
        <ul className="w-xl h-full flex flex-col gap-3 mx-auto">
            {todos.map(todo => (
                    <div className="flex justify-between w-full p-6 rounded-xl shadow-lg dark:bg-white/6 dark:shadow-2xl">
                        <input type="radio" />
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