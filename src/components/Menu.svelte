<script>
  import { showAddForm, TodoStore } from "../stores";

  function toggleAddForm() {
    showAddForm.update((n) => !n);
  }

  function removeAll() {
    if (confirm("Are you sure?")) {
      TodoStore.set([]);
    }
  }

  function unresolveAll() {
    TodoStore.update((currentStore) => {
      return currentStore.map((t) => {
        const completed = false;
        return { ...t, completed };
      });
    });
  }

  function resolveAll() {
    TodoStore.update((currentStore) => {
      return currentStore.map((t) => {
        const completed = true;
        return { ...t, completed };
      });
    });
  }
</script>

<div class="column is-2 has-background-grey">
  <aside class="menu">
    <p class="menu-label has-text-light has-text-centered">Todo menu</p>
    <ul class="menu-list">
      <li>
        <a
          class="has-background-grey has-text-light"
          on:click|preventDefault={resolveAll}>Mark all as resolved</a
        >
      </li>
      <li>
        <a
          class="has-background-grey has-text-light"
          on:click|preventDefault={unresolveAll}>Mark all as unresolved</a
        >
      </li>
      <li>
        <a
          class="has-background-grey has-text-light"
          on:click|preventDefault={removeAll}>Remove all todos</a
        >
      </li>
      <li>
        <a
          class="has-background-grey has-text-light"
          on:click|preventDefault={toggleAddForm}>Add Todo</a
        >
      </li>
    </ul>
  </aside>
</div>

<style>
  ul.menu-list > li > a:hover {
    text-decoration: underline;
  }
</style>
