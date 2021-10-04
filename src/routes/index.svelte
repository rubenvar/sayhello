<script context="module">
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
    const res = await fetch("/index.json");

    if (res.ok) {
      const languages = await res.json();

      return {
        props: { languages },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import { allLanguages } from "$lib/stores";
  export let languages;

  if (languages.length) {
    allLanguages.update(() => [...languages]);
  }
  console.log($allLanguages);

  const langs = languages.map((lang) => ({
    name: lang.title.rendered,
    id: lang.id,
  }));
</script>

<h1>How to say Hello in many languages</h1>
<p>Pick one and lest's see what happens:</p>

{#if langs.length}
  <ul>
    {#each langs as lang}
      <li><a href="/{lang.name}">{lang.name}</a></li>
    {/each}
  </ul>
{/if}
