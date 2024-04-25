<script>
  export let filter = "all";
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
</div>
