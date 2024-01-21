import { useStore } from './store'
import type { ITodo } from '@/types/todo'
import type { IAppState } from '@/types/appstate'


export function TodoItem({todo}: {todo:ITodo}) {
    const { remove, toggle } = useStore( (state:IAppState) => state)


    return (
      <tr>
        <td>{todo.id}</td>
        <td>{todo.task}</td>
        <td><span onClick={e => toggle(todo.id)}>{todo.complete? 'ok': 'open'}</span></td>
        <td><button onClick={e=> remove(todo.id)}>remove</button></td>
      </tr>
      
    );
  }
  
export  function TodoList() {
    const { list } = useStore( (state:IAppState)=> state)
  return (
    <div>
        <h1>Todo List</h1>
        <h5>{list.length} of task(s) to be done:</h5>
        <table className='table-auto'>
            <thead>
                <th>ID</th>
                <th>Task</th>
                <th>status</th>
                <th>action</th>
            </thead>
            <tbody>
            {list && list.map( (todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>  )}

            </tbody>
            
          </table>
    </div>
    
  );
}
