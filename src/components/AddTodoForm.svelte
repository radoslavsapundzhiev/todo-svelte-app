<script>
  import { TodoStore, showAddForm } from "../stores.js";
  import { v4 as uuidv4 } from "uuid";

  let title = "";
  let color = "#000000";

  const handleSubmit = () => {
    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        color,
        completed: false,
      };
      TodoStore.update((currentTodo) => {
        return [newTodo, ...currentTodo];
      });
      title = "";
      color = "#000000";
    }
  };

  function hideAddTodoForm() {
    showAddForm.set(false);
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="form block">
  <div class="field">
    <label for="title" class="label">Title</label>
    <div class="control">
      <input
        class="input"
        type="text"
        name="title"
        id="title"
        bind:value={title}
        required
      />
    </div>
  </div>
  <div class="field">
    <label for="color" class="label">Color</label>
    <div class="control">
      <input
        class="input"
        type="color"
        name="color"
        id="color"
        bind:value={color}
        required
      />
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <a class="button is-link is-light" on:click={hideAddTodoForm}>Cancel</a>
    </div>
  </div>
</form>

<style>
  form {
    width: 50%;
    margin: 0 auto;
  }
</style>
