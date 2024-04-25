<script>
  import { TodoStore } from "../stores.js";
  import TodoItem from "./TodoItem.svelte";
  import Filter from "./Filter.svelte";

  let filter = "all";

  let todos = $TodoStore;

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

  $: totalTodos = $TodoStore;
  $: resolvedTodos = $TodoStore.filter((t) => t.completed === true);
  $: unresolvedTodos = $TodoStore.filter((t) => t.completed === false);
  $: colors = [...new Set($TodoStore.map((todo) => todo.color))];

  $: if (filter === "all") {
    todos = totalTodos;
  } else if (filter === "resolved") {
    todos = resolvedTodos;
  } else if (filter === "unresolved") {
    todos = unresolvedTodos;
  }
</script>

<Filter bind:filter />

{#each todos as todo (todo.id)}
  <TodoItem {todo} on:resolve={toggleResolve} />
{/each}
