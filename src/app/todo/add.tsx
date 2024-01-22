import { useState } from 'react'
import { useStore } from './store'
import { v4 as uuidv4 } from 'uuid'

import type { IAppState} from '@/types/appstate'
import { TodoSchema } from '@/types/todo'

import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalContent,
    useDisclosure
} from '@nextui-org/react'
export  function AddTodo() {
    const { add } = useStore( state => state)

    const [task,setTask] = useState('test - 0')
    const [counter, setCounter] = useState(1)
    const { isOpen,onOpen, onOpenChange } = useDisclosure()

    const onAdd = ()=> {
        const todo = { 
            id: uuidv4(),
            task
        } as ITodo;
        const result = TodoSchema.safeParse(todo)
        if(result.success) {
            add(todo)
            setCounter(pre => ++pre)
            setTask('test - ' + counter)
        } else {
            console.log(result.error.issues[0].message)
        }

    }

   
    return (
      <div className='flex justify-end'>
            <Button onPress={onOpen}>Add new task</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}
                placement='top'
                backdrop='opaque'
            >

            <ModalContent>
                { (onClose) => (
                    <>
                    <ModalHeader>
                        <h3>What do you want to do?</h3>
                    </ModalHeader>
                    <ModalBody>
                        <Input 
                            isRequired
                            autoFocus
                            id='task'
                            label='Task'
                            onChange={ e=> setTask(e.target.value)}
                            value={task} 
                            placeholder='new task'
                            onKeyDown={e => {
                                if(e.key == 'Enter') {
                                    e.preventDefault()
                                    onAdd()
                                }
                            }}
                        />
                    </ModalBody>
                    <ModalFooter className='m-4 gap-4'>
                        <Button color='danger' variant='light' onPress={onClose}>Cancel</Button>
                        <Button color='primary' onPress={onClose}>Close</Button>
                    </ModalFooter>
                    </>
                
                )}
                </ModalContent>
                
            </Modal>
            
        
      </div>
      
    );
  }
  