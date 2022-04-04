<script context="module" lang="ts">
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

<script lang="ts">
  import { KQL_AllLangs } from "$lib/graphql/_kitql/graphqlStores";
  import Lang from "$lib/Lang.svelte";

  const langs = $KQL_AllLangs.data.map((lang) => ({
    name: lang.title.rendered,
    id: lang.id,
  }));
</script>

<h1>All Languages</h1>

<p>Check out how to say hello in any of these languages</p>

<p>If you need more options, please <a href="/contact">contribute</a>!</p>

{#if langs.length}
  <ul>
    {#each langs as lang}
      <Lang {lang} />
    {/each}
  </ul>
{/if}

<style lang="scss">
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
</style>
