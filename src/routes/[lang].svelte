<script context="module">
  export const load = async ({ page, fetch }) => {
    const { lang } = page.params;
    //! not great: import alllll languages as in index, and in js script find the current one and display it...
    // TODO improve this
    const res = await fetch(`index.json`);

    if (res.ok) {
      const languages = await res.json();

      return {
        props: { lang, languages },
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
  export let lang;
  export let languages;

  if (languages.length) {
    allLanguages.update(() => [...languages]);
  }

  const language = languages.find((l) => l.title.rendered === lang);
  console.log(language);
</script>

<h1>How to say hello in {language.title.rendered}!</h1>
<p>You are looking for this word:</p>
<p>{language.acf.slc_the_word}</p>
<p>With this sound</p>
<audio controls src={language.acf.slc_the_sound}>
  <track kind="captions" />
  what
</audio>
