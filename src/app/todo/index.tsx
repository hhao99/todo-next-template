import { TodoList } from './list'
import { AddTodo } from './add'

//import react aria components
import { Button } from 'react-aria-components'

import { useStore } from '@/app/todo/store'
const TodoApp = ()=> {
    const { reset }  = useStore( state => state)
    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />

            <Button onPress={ e=> reset()}>reset</Button>

        </div>
    )
}

export default TodoApp