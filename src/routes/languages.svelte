<script context="module" lang="ts">
  import allLanguages from "$lib/data/languages.json";

  export const load = async () => {
    const languages = allLanguages.map((l) => ({
      name: l.name,
      slug: l.name.toLowerCase().replaceAll(" ", "-"),
    }));
    return {
      props: { languages },
    };
  };
</script>

<script lang="ts">
  import ListedLang from "$lib/ListedLang.svelte";
  import type { TListedLanguage } from "$lib/data/lang";

  export let languages: TListedLanguage[];
</script>

<h1>All Languages</h1>
<p>Check out how to say hello in any of these languages</p>
<p>If you need more options, please <a href="/contact">contribute</a>!</p>
{#if languages.length}
  <ul>
    {#each languages as lang}
      <ListedLang {lang} />
    {/each}
  </ul>
{/if}
<div class="end">
  <p>
    <a href="/">Check another language!</a>
  </p>
</div>

<style lang="scss">
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
</style>
