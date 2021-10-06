<script>
  export let lang;
</script>

<li><a href="/{lang.name}">{lang.name}</a></li>

<style lang="scss">
  li {
    a {
      background: var(--accent);
      border: 5px solid var(--accent);
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
  }
</style>
