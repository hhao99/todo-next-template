import { useStore } from './store'
import type { ITodo } from '@/types/todo'
import type { IAppState } from '@/types/appstate'

// flowbite
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCell
} from 'flowbite-react';
export function TodoItem({todo}: {todo:ITodo}) {
    const { remove, toggle } = useStore( (state:IAppState) => state)
    return (
      <TableRow>
        <TableCell >{todo.id}</TableCell>
        <TableCell className='px-6 py-4 font-medium'>{todo.task}</TableCell>
        <TableCell className='px-6 py-4'>
            <span onClick={e => toggle(todo.id)}>
            <input type='checkbox' checked={todo.complete} />
                {todo.complete? 'ok': 'open'}
            </span>
        </TableCell>
        <TableCell className='px-6 py-4'>
          <button type='button' 
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={e=> remove(todo.id)}>remove</button>
        </TableCell>
      </TableRow>
      
    );
  }
  
export  function TodoList() {
    const { list } = useStore( (state:IAppState)=> state)
    const columns = ['id','task','status','-']
  return (
    <div className='relative overflow-x-auto'>
       <Table> 
          <caption className='text-left'>
            <h1>Todo List</h1>
            <h5>{list.length} of task(s) to be done:</h5>
          </caption>
          <TableHead>
                <TableRow>
                  {columns.map( c=> <TableHeadCell key={c}>{c}</TableHeadCell>) }
                </TableRow>
          </TableHead>
          <TableBody>
            {list && list.map( (todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>  )}

          </TableBody>
          </Table>
    </div>
    
  );
}
