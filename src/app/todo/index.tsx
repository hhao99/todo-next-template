import { TodoList } from './list'
import { AddTodo } from './add'

const TodoApp = ()=> {
    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default TodoApp