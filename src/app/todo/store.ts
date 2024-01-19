import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '@/types/todo'

// the App state
export interface AppState {
    todos: Todo[]
    add: (task:string) => void
    remove: (id: string) => void
    reset: () => void
    toggle: (id: string) => void
    update: (todo: Todo ) => void

}

// zustand state store
export const useStore = create<AppState>(
    (set) => ({
        todos: [],
        add: (task) => {
            set( (state: AppState)=> ({
                todos: [
                    ...state.todos,
                    {
                        id: uuidv4(),
                        task
                    } as Todo
                ]
            }))
        },
        remove: (id) => {
            set( (state: AppState)=> ({
                todos: state.todos.filter( (todo: Todo) => todo.id !== id )
            }) )
        },
        reset: () => {
            set( (state: AppState) => ({
                todos: []
            }))
        },
        toggle: (id)=> {
            console.log('test')
        },
        update: (todo) => {}
    })
)