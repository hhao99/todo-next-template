import { useStore } from './store'
import { useState } from 'react'
import { Todo } from '@/types/todo'

// adobe aira
import { 
    Button,
    Form,
    TextField
} from 'react-aria-components'

export  const AddTodo = ()=> {
    //local state 
    const [task, setTask] = useState('test - 0')
    const [counter, setCounter ] = useState(1)
    
    const { add } = useStore( state => state )
    
    //event handler
    const onAdd = (e)=> {
        if(task.length > 5) {
            e.preventDefault()
            add(task)
            setTask('test - ' + counter)
            setCounter( pre=> pre+1 )
        }
        
    }
    return (
        <div>
            <Form 
                onSubmit={ e=> onAdd(e) }
                onReset={ e=> setTask('test 0')}
                >
                
                <TextField
                    isRequired
                    name='task'
                    type='textfield'
                    label='new task'
                    onChange={e=> setTask(e.target.value)}
                    />
                <div className='flex gap-2'>
                    <Button type='submit'>Add</Button>
                    <Button variant='secondary' type='reset'>Reset</Button>
                </div>
                    
            </Form>
        </div>
    )
}