import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { ITodo } from '@/types/todo'
import type { IAppState } from '@/types/appstate'

export const useStore = create<IAppState>( (set) => ({
    list: [],
    add: (_todo: ITodo) => {
        set( (state:IAppState) => ({
            list: [
                ...state.list,
                _todo
            ]
        }))
    },
    remove: (id) => {
        set( (state:IAppState) => ({
            list: state.list.filter( todo => todo.id !== id)
        }))
    },
    toggle: (id) => {
        set( (state:IAppState) => ({
            list: state.list.map( todo=> todo.id === id? {...todo, complete: !todo.complete}: todo )
        }))
    }
}))