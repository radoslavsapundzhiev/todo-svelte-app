<script>
    import { TodoStore } from "../stores.js";
    import TodoItem from "./TodoItem.svelte";
</script>

{#each $TodoStore as todo (todo.id)}
    <TodoItem todo={todo}/>
{/each}




