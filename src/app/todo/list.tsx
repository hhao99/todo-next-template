
import React, { useState} from 'react'
import { useStore } from './store'
import type { ITodo } from '@/types/todo'
import type { IAppState } from '@/types/appstate'

import {
  Button,
  // modal 
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
  // table
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Switch
} from "@nextui-org/react";


  
export  function TodoList() {
    const { list, remove, toggle } = useStore( (state:IAppState)=> state)
   // todo list table related variables 
    const [selectedKeys, setSelectedKeys]  = useState(new Set())
    const columns = [
      { label: 'Id', key: 'id' },
      { label: 'Task', key: 'task'},
      { label: 'Status', key: 'status'},
      { label: '-', key: 'action'}
    ]


    const RemoveIcon = ()=> {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

      )
    }

    const DoneIcon = ()=>  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  )
    const OpenIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  )

  const RemoveAlerDialog = ({id}:{id:string})=> {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    return (
      <>
        <Button onPress={onOpen}>
          <RemoveIcon className='w-4 h-4' />
        </Button>
        <Modal aria-label='remove dialog'
          isOpen={isOpen} 
          onOpenChange={onOpenChange}>
          <ModalContent>
            { (onClose) =>
            (
             <>
              <ModalHeader>Todo Remove Dialog</ModalHeader>
              <ModalBody>
                <h3>Are you want to delete the todo: {id}</h3>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" onPress={e=> {remove(id); onClose()}}>
                  Confirm
                </Button>
              </ModalFooter>
              </> 
            )}
          </ModalContent>

        </Modal>
      </>
    )
  }
  return (
    <div>
        <h1>Todo List</h1>
        <h5>{list.length} task(s) to be done:</h5>
        <Table 
          removeWrapper
          aria-label='todo list table'
          isStriped
          selectionMode='multiple'
          selectedKeys={selectedKeys}
          onSelectionChange={ e=> {
            console.log(selectedKeys)
            setSelectedKeys(e)
          }}
          
        >
            <TableHeader columns={columns}>
                { (column)=> <TableColumn key={column.key}>{column.label}</TableColumn> }
            </TableHeader>
            <TableBody items={list}>
            { (item: ITodo)=> (
              <TableRow key={item.id}>
                <TableCell className='w-1/5'>
                  <div className='w-[96px] text-nowrap text-ellipsis overflow-hidden'>{item.id}</div>
                </TableCell>
                <TableCell className='w-2/5'>{item.task}</TableCell>
                <TableCell className='w-1/5'>
                  <Switch 
                    onChange={e=> toggle(item.id)} 
                    isSelected={item.complete}>
                      {item.complete?<DoneIcon />:<OpenIcon />}
                      </Switch>
                  </TableCell>
                <TableCell className='w-1/5'>
                  <div>
                    <RemoveAlerDialog id={item.id}/>
                  </div>
                </TableCell>
              </TableRow>
            )}

            </TableBody>
            
          </Table>
    </div>
    
  );
}
