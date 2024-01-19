import { useStore } from './store'
import { Todo } from '@/types/todo'

export  const TodoItem = ({todo}L{ todo: Todo})=> {
    const { remove } = useStore( state => state )

    return (
        <div>
            <h1>Todo Item</h1>
        </div>
    )
}