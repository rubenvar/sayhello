<script lang="ts">
  import type { TListedLanguage } from "./data/lang";

  export let lang: TListedLanguage;
</script>

<a href="/{lang.slug}">{lang.name}</a>

<style lang="scss">
  a {
    background: var(--accent);
    border: 5px solid var(--accent);
    border-radius: 2px;
    color: #fff;
    display: block;
    text-decoration: none;
    font-size: 2.4rem;
    padding: 7px 30px 5px;
    &:hover {
      background-color: #fff;
      color: var(--accent);
      text-decoration: none;
    }
  }
</style>
