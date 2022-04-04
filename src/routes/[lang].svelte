<script context="module" lang="ts">
  import { KQL_SingleLang } from "$lib/graphql/_kitql/graphqlStores";

  export const load = async ({ params, fetch }) => {
    await KQL_SingleLang.queryLoad({
      fetch,
      variables: { title: params.lang },
    });
    return {};
  };
</script>

<script lang="ts">
  $: language = $KQL_SingleLang?.data?.posts?.edges[0]?.node;
  $: console.log(language);
</script>

<h1>How to say hello in {language?.title}!</h1>
<p>You are looking for this word:</p>
<p>{language?.simpleLanguages.slcTheWord}</p>
<p>With this sound</p>
<audio controls src={language?.simpleLanguages.slcTheSound}>
  <track kind="captions" />
  what
</audio>
