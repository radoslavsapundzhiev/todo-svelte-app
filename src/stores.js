import { writable } from "svelte/store";

export const TodoStore = writable([
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
    color: "#edd400"
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    color: "#edd400"
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    color: "#729fcf"
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
    color: "#ad7fa8"
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    color: "#729fcf"
  },
]);

export const showAddForm = writable(false);
