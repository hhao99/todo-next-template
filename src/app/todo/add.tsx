import { useState } from 'react'
import { useStore } from './store'
import { v4 as uuidv4 } from 'uuid'

import type { IAppState} from '@/types/appstate'
import { TodoSchema } from '@/types/todo'

import { Input } from '@nextui-org/react'
export  function AddTodo() {
    const { add } = useStore( state => state)
    const [counter, setCounter] = useState(0)
    const [task,setTask] = useState(`task - ${counter}`)
    

    const onAdd = async ()=> {
        const todo = { 
            id: uuidv4(),
            task
        } as ITodo;
        const result = TodoSchema.safeParse(todo)
        if(result.success) {
            add(todo)
            await setCounter(pre => ++pre)
            await setTask('test - ' + counter)
        } else {
            console.log(result.error.issues[0].message)
        }

    }
    return (
      <div>
        <h3>Add New Task</h3>
            <Input 
                name='task' 
                id='task'
                label='new task'
                description='new task, length must >= 6'
                isRequired
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
        
      </div>
      
    );
  }
  