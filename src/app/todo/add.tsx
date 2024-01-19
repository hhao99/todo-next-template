import { useStore } from './store'
import { useState } from 'react'
import { Todo } from '@/types/todo'

export  const AddTodo = ()=> {
    //local state 
    const [task, setTask] = useState('test - 0')
    const [counter, setCounter ] = useState(1)
    
    const { add } = useStore( state => state )
    
    //event handler
    const onAdd = (e)=> {
        if(task.length > 5) {
            add(task)
            setTask('test - ' + counter)
            setCounter( pre=> pre+1 )
        }
        
    }
    return (
        <div>
            <form onSubmit={ e=> {e.preventDefault() }}>
                <label htmlFor='task'>
                    new task: 
                    <input type='text' id='task'
                        onChange={e=> setTask(e.target.value)}
                        onKeyDown= { e => {
                            if(e.key =='Enter') {
                                e.preventDefault()
                                onAdd(e)
                            }
                        }}
                        />
                    <button onClick= { e => {onAdd(e)}}>+</button>
                </label>
            </form>
        </div>
    )
}