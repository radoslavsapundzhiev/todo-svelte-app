<script>
  import { showAddForm } from "./stores";
  import Footer from "./components/Footer.svelte";
  import Hero from "./components/Hero.svelte";
  import Menu from "./components/Menu.svelte";
  import TodoList from "./components/TodoList.svelte";
  import Filter from "./components/Filter.svelte";
  import AddTodoForm from "./components/AddTodoForm.svelte";
</script>

<Hero />

<div class="columns is-flex-direction-column is-fullheight-100vh">
  <main class="column">
    <div class="columns">
      <Menu />

      <div class="column is-10 has-text-light">
        {#if $showAddForm}
          <AddTodoForm />
        {/if}
        <Filter />
        <TodoList />
      </div>
    </div>
  </main>

  <Footer />
</div>

<style>
  .is-fullheight-100vh {
    height: 100vh;
  }
</style>
