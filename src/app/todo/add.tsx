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
        {/* The button to open modal */}
    <label htmlFor="my_modal_6" className="btn">add new task</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Add new Todo Task</h3>
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
        <div className="modal-action">
        <label htmlFor="my_modal_6" className="btn">Close!</label>
        </div>
    </div>
    </div></div>
      
    );
  }
  