import { writable } from 'svelte/store';

export const TodoStore = writable([
    {
        id: 1,
        name: "First todo",
        color: '',
        isDone: false
    },
    {
        id: 2,
        name: "Second todo",
        color: '',
        isDone: false
    },
    {
        id: 3,
        name: "Third todo",
        color: '',
        isDone: false
    },
    {
        id: 4,
        name: "Fourth todo",
        color: '',
        isDone: false
    },
    {
        id: 5,
        name: "Fifth todo",
        color: '',
        isDone: false
    }
]);