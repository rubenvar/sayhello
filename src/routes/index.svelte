<script context="module" lang="ts">
  import allLanguages from "$lib/data/languages.json";

  export const load = async () => {
    const languages = shuffle(allLanguages).map((l) => ({
      name: l.name,
      slug: l.name.toLowerCase().replaceAll(" ", "-"),
    }));
    return {
      props: { languages },
    };
  };
</script>

<script lang="ts">
  import shuffle from "just-shuffle";
  import ListedLang from "$lib/ListedLang.svelte";
  import type { TListedLanguage } from "$lib/data/lang";

  export let languages: TListedLanguage[];
</script>

<h1>Learn how to say <span>Hello</span> in every language:</h1>
<h2>
  How to say <span>hello</span> in
  <form><input type="search" /></form>
</h2>
<h3>travel everywhere... and always be welcomed with a smile</h3>

<p>
  For now, this website does nothing else besides telling you how to say hello
  in many different languages.
</p>
<p>So go ahead and check some of the most popular ones here:</p>

{#if languages.length}
  <ul>
    {#each languages as lang}
      <ListedLang {lang} />
    {/each}
  </ul>
{/if}

<a href="/languages">The whole list is here</a>

<style lang="scss">
  h1 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 7.4rem;
    margin: 0;
    span {
      color: var(--accent);
    }
  }
  h2 {
    font-weight: 400;
    text-align: center;
    font-size: 4.4rem;
    margin: 120px 0;
    span {
      font-family: "Courgette", cursive;
    }
    form {
      display: inline;
      input {
        width: 300px;
        border: 1px solid;
        border-bottom: 2px solid;
        box-shadow: none;
        padding: 0;
      }
    }
  }
  h3 {
    font-weight: 400;
    font-family: "Courgette", cursive;
    text-align: center;
    color: rgb(119, 119, 119);
    font-size: 3.6rem;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
</style>
