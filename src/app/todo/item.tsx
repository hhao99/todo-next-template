import { useStore } from './store'
import { Todo } from '@/types/todo'

export  const TodoItem = ({todo}:{ todo: Todo})=> {
    const { remove } = useStore( state => state )

    return (
        <div>
            <span>{todo.id}</span>
            <span>{todo.task}</span>
        </div>
    )
}