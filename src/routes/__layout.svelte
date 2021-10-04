<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Header />
<main>
  <slot />
</main>

<Footer />

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  main {
    max-width: 680px;
    margin: 0 auto;
    font-family: sans-serif;
  }
</style>
