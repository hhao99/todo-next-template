
import { TodoList } from './list'
import { AddTodo } from './add'

import { Divider } from '@nextui-org/react'
export default function TodoApp() {
  return (
    <main>
      <h1 className='text-3xl text-center text-red-400'>Todo App</h1>
      <Divider />
      <AddTodo />
      <Divider />
      <TodoList />
    </main>
    
  );
}
