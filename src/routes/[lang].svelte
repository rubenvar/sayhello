<script context="module" lang="ts">
  import languages from "$lib/data/languages.json";

  export async function load({ params }) {
    const language = languages.find(
      (l) => l.name.toLowerCase().replaceAll(" ", "-") === params.lang
    );

    if (language) {
      return {
        props: { language },
      };
    }
    return {};
  }
</script>

<script lang="ts">
  import { words as allWords } from "$lib/Config";
  import { word as selected } from "$lib/stores/word";
  import type { TLanguage } from "$lib/data/lang";
  import WordList from "$lib/WordList.svelte";

  export let language: TLanguage;

  const words = allWords.filter(
    (w) => !!language.words[w] && language.words[w] !== ""
  );
</script>

<main>
  <div class="top">
    <h1>
      <span class="how">How to say…</span><br /><span class="hello"
        >{$selected}</span
      >
      <span class="how">in</span>
      <span class="lang">{language.name}</span><span class="quest">?</span>
    </h1>
  </div>
  <div class="words">
    <WordList {words} />
    <div class="word">
      <p>{language.words[$selected]}</p>
      <p>🎧 audio from forvo here</p>
      <p class="more">
        <a
          href="https://en.wikipedia.com/wiki/{language.name}_language"
          target="_blank"
        >
          <img
            src="https://en.wikipedia.org/static/favicon/wikipedia.ico"
            alt=""
          />
          Learn more about {language.name} here</a
        >
      </p>
    </div>
  </div>
  <div class="end">
    <p>
      <a href="/">Check another language!</a>
    </p>
  </div>
</main>

<style lang="scss">
  h1 {
    margin-top: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 52px;
    font-weight: 400;
    text-align: center;
    line-height: 1.2;
    .how {
      font-size: 40px;
    }
    .hello {
      /* font-weight: 700; */
      font-family: "Courgette", cursive;
    }
    .lang {
      letter-spacing: -3px;
      text-transform: uppercase;
    }
    .quest {
      color: var(--accent);
    }
  }
  .words {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  ul {
    li {
      &.active {
        color: var(--accent);
      }
    }
  }
  .word {
    .more {
      a {
        text-decoration: none;
        img {
          display: inline-block;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          margin-right: 4px;
        }
      }
    }
  }
  .end {
    p {
      text-align: center;
    }
  }
</style>
