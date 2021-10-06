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
  import Lang from "$lib/Lang.svelte";
  export let languages;

  if (languages.length) {
    allLanguages.update(() => [...languages]);
  }

  const langs = $allLanguages
    .map((lang) => ({
      name: lang.title.rendered,
      id: lang.id,
    }))
    .filter((l, i) => i < 20);
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

{#if langs.length}
  <ul>
    {#each langs as lang}
      <Lang {lang} />
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
