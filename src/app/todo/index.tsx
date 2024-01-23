
import { TodoList } from './list'
import { AddTodo } from './add'

import {
  Button,
  Divider,
  PopoverContent,
  Popover,
  PopoverTrigger
} from '@nextui-org/react'
export default function TodoApp() {
  return (
    <main>
      <div className='flex justify-between'>
        <div className='text-xl'>Todo App Demo</div>
        <div> </div>
        <Popover placement='left'>
          <PopoverTrigger>
            <Button>new task</Button>
          </PopoverTrigger>
          <PopoverContent>
            <AddTodo />
          </PopoverContent>
        </Popover>
      </div>
      <Divider />
      <TodoList />
    </main>
    
  );
}
