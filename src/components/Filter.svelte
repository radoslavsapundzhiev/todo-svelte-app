<script>
  import { createEventDispatcher } from "svelte";
  export let filter = "";
  export let colors = [];
  export let selected = "";

  const dispatch = createEventDispatcher();

  function onClear() {
    dispatch("clear");
  }
</script>

<div class="buttons">
  <button
    class="button"
    class:is-active={filter === "all"}
    on:click={() => (filter = "all")}>All</button
  >
  <button
    class="button"
    class:is-active={filter === "resolved"}
    on:click={() => (filter = "resolved")}>Resolved</button
  >
  <button
    class="button"
    class:is-active={filter === "unresolved"}
    on:click={() => (filter = "unresolved")}>Unresolved</button
  >
  {#each colors as color, i}
    <button
      class="button is-rounded"
      style="background: {color}"
      class:is-focused={selected === color}
      on:click={() => (selected = color)}>{i + 1}</button
    >
  {/each}
  <button class="button is-info" on:click={onClear}>Clear</button>
</div>
