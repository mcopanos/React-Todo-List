export default function CreateList({onClick}) {
    return (
         <div className='flex flex-col justify-evenly h-85 mx-auto max-w-md items-center gap-x-4 rounded-xl p-6 shadow-lg dark:bg-white/6 dark:shadow-2xl'>
            <h2>Start by making a list</h2>
            <button 
                // className='m-5 rounded-xl bg-white p-4 shadow-lg outline outline-black/5 text-black' 
                className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-full w-18 h-18'
                onClick={onClick}
            > 
                +
            </button>
        </div>
    )
   
}