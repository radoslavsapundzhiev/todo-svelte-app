<script>
  import { TodoStore } from "../stores.js";
  import TodoItem from "./TodoItem.svelte";
  import Filter from "./Filter.svelte";

  let filter = "all";

  let todos = $TodoStore;

  let selected = "";

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
    todos = $TodoStore;
  }

  $: totalTodos = $TodoStore;
  $: resolvedTodos = $TodoStore.filter((t) => t.completed === true);
  $: unresolvedTodos = $TodoStore.filter((t) => t.completed === false);
  $: colors = [
    ...new Set(
      $TodoStore.map((todo) => todo.color).filter((c) => c !== "#000000")
    ),
  ];

  $: if (filter === "all") {
    todos = totalTodos;
  } else if (filter === "resolved") {
    todos = resolvedTodos;
  } else if (filter === "unresolved") {
    todos = unresolvedTodos;
  }

  $: if (selected) {
    todos = totalTodos.filter((t) => t.color === selected);
  }

  function handleClear() {
    filter = "all";
    selected = "";
    todos = $TodoStore;
  }

  function handleDelete(e) {
    const todoId = e.detail;
    TodoStore.update((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== todoId);
    });
    todos = $TodoStore;
  }
</script>

<Filter bind:filter bind:colors bind:selected on:clear={handleClear} />

{#each todos as todo (todo.id)}
  <TodoItem {todo} on:resolve={toggleResolve} on:delete={handleDelete} />
{/each}
