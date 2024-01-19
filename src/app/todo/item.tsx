import { useStore } from './store'
import { Todo } from '@/types/todo'

// react aria
import { Button } from 'react-aria-components'

export  const TodoItem = ({todo}:{ todo: Todo})=> {
    const  remove  = useStore( state => state.remove )

    return (
        <div>
            <span>{todo.id}</span>
            <span>{todo.task}</span>
            <Button onPress={ e=> remove(todo.id)}>Remove</Button>

        </div>
    )
}