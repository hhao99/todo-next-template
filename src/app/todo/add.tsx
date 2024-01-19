import { useStore } from './store'
import { Todo } from '@/types/todo'

export  const AddTodo = ()=> {
    const { add } = useStore( state => state )

    return (
        <div>
            <h1>Add Todo</h1>
        </div>
    )
}