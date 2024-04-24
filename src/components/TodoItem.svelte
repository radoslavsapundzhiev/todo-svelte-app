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
</script>

<div class="box">
  <div class="columns">
    <div class="column is-10">
      <label class="checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          on:change={handleResolve}
        />
        {todo.title}
      </label>
    </div>
    <div class="column is-2">
      <button class="button is-danger">Delete</button>
    </div>
  </div>
</div>
