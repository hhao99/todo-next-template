import type { ITodo } from '@/types/todo'
export interface IAppState {
    list: ITodo[],
    add: (todo: ITodo)=> void,
    remove: (id: string) => void,
    toggle: (id: string) => void,
}