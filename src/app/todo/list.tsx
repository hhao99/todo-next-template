import { useStore } from './store'
import type { ITodo } from '@/types/todo'
import type { IAppState } from '@/types/appstate'

// next ui
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell
} from '@nextui-org/react'




export function TodoItem({todo}: {todo:ITodo}) {
    const { remove, toggle } = useStore( (state:IAppState) => state)

   

    return (
      <TableRow key={todo.id}>
        <TableCell>{todo.id}</TableCell>
        <TableCell>{todo.task}</TableCell>
        <TableCell>
            <span onClick={e => toggle(todo.id)}>
            <input type='checkbox' checked={todo.complete} />
                {todo.complete? 'ok': 'open'}
                
            </span>
        </TableCell>
        <TableCell><button onClick={e=> remove(todo.id)}>remove</button></TableCell>
      </TableRow>
      
    );
  }
  
export  function TodoList() {
    const { list } = useStore( (state:IAppState)=> state)
    const columns = [
        { 
            key: 'id',
            label: "Id"
        },
        { 
            key: 'task',
            label: "Task"
        },
        { 
            key: 'status',
            label: "Status"
        },
        { 
            key: 'action',
            label: "Action"
        }
    ]
  return (
    <div>
        <h1>Todo List</h1>
        <h5>{list.length} of task(s) to be done:</h5>
        <Table >
            <TableHeader columns={columns}>
                { c=> <TableColumn key={c.key}>{c.label}</TableColumn> }
            </TableHeader>
            <TableBody items={list}>
                {(item: ITodo) => <TodoItem key={item.id} todo={item}/>  }
            </TableBody>
            
        </Table>
    </div>
    
  );
}
