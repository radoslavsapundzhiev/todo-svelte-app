<script>
  import { v4 as uuidv4 } from "uuid";
  import { TodoStore, showAddForm } from "../stores.js";

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
  </div>
</form>

<style>
  form {
    width: 50%;
    margin: 0 auto;
  }
</style>
