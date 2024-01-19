import { useStore } from './store'

export const TodoList = ()=> {
    const { todos } = useStore( state => state )

    return (
        <div>
            <h1>Todo List</h1>
        </div>
    )
}