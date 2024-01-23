
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


  const RemoveAlerDialog = ({id}:{id:string})=> {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    return (
      <>
        <Button onPress={onOpen}>remove</Button>
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
                  Remove!
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
        <h5>{list.length} of task(s) to be done:</h5>
        <Table aria-label='todo list table'
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
                      {item.complete?'ok':'open'}
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
