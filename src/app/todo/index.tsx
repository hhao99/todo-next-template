
import { TodoList } from './list'
import { AddTodo } from './add'
export default function TodoApp() {
  return (
    <main>
      <div className='flex justify-between'>
        <h1>Todo App Demo</h1>
        <AddTodo />
      </div>
      <div className='divider' />
      
      <TodoList />
    </main>
    
  );
}
