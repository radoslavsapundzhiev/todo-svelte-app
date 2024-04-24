<script>
  import { TodoStore } from "../stores.js";
  import TodoItem from "./TodoItem.svelte";

  function toggleResolve(e) {
    const updatedTodo = e.detail;
    TodoStore.update((currentTodo) => {
        return currentTodo.map((todo) => {
            if (todo.id === updatedTodo.id) {
                return updatedTodo;
            }
            return todo;
        });
    });
  }
</script>

{#each $TodoStore as todo (todo.id)}
  <TodoItem {todo} on:resolve={toggleResolve} />
{/each}
