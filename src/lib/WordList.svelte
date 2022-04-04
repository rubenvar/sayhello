<script lang="ts">
  import { word as selected } from "$lib/stores/word";

  export let words: string[];
</script>

<ul>
  {#each words as word}
    <li class:active={$selected === word}>
      <button disabled={$selected === word} on:click={() => ($selected = word)}>
        {word}
      </button>
    </li>
  {/each}
</ul>
