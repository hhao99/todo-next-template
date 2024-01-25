import { useState } from 'react'
import { useStore } from './store'
import { v4 as uuidv4 } from 'uuid'

import type { IAppState} from '@/types/appstate'
import { TodoSchema } from '@/types/todo'
export  function AddTodo() {
    const { add } = useStore( state => state)

    const [task,setTask] = useState('test - 0')
    const [counter, setCounter] = useState(1)

    const onAdd = ()=> {
        const todo = { 
            id: uuidv4(),
            task
        } as ITodo;
        const result = TodoSchema.safeParse(todo)
        if(result.success) {
            add(todo)
            setCounter(pre => ++pre)
            setTask('test - ' + counter)
        } else {
            console.log(result.error.issues[0].message)
        }

    }
    return (

    <>
      <form className='max-w-sm mx-auto'>
        
            <label html_for="task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                New Task</label>
            <input type='text' name='task' id='task'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="new task" 
                required
       
                onChange={ e=> setTask(e.target.value)}
                value={task} 
                placeholder='new task'
                onKeyDown={e => {
                    if(e.key == 'Enter') {
                        e.preventDefault()
                        onAdd()
                    }
                }}
            />
        
      </form>
      </>
    );
  }
  