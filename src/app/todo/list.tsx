import { useStore } from './store'

import { Todo } from '@/types/todo'
import { TodoItem } from './item'
export const TodoList = ()=> {
    const { todos } = useStore( state => state )

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                { todos && todos.map( (todo:Todo)=> <TodoItem key={todo.id} todo={todo} />) }
            </div>
        </div>
    )
}