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
      <div>
        <label>New task:
            <input type='text' name='task' id='task'
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
        </label>
        
      </div>
      
    );
  }
  