<script>
  import { TodoStore } from "../stores";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let todo;

  function handleResolve() {
    const completed = !todo.completed;
    const updatedTodo = { ...todo, completed };
    dispatch("resolve", updatedTodo);
  }

  const handleDelete = (todoId) => {
    if (confirm("Are you sure?")) {
      TodoStore.update((currentTodo) => {
        return currentTodo.filter((todo) => todo.id !== todoId);
      });
    }
  };
</script>

<div class="box">
  <div class="columns">
    <div class="column is-1">
      {#if todo.completed}
        <span>DONE</span>
      {/if}
    </div>
    <div class="column is-1">
      <input type="color" value={todo.color} disabled />
    </div>
    <div class="column is-8">
      <label class="checkbox" class:completed={todo.completed}>
        <input
          type="checkbox"
          checked={todo.completed}
          on:change={handleResolve}
        />
        {todo.title}
      </label>
    </div>
    <div class="column is-2">
      <button class="button is-danger" on:click={() => handleDelete(todo.id)}
        >Delete</button
      >
    </div>
  </div>
</div>

<style>
  .completed {
    text-decoration: line-through;
    color: green;
  }
</style>
