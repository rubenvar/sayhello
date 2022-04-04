import preprocess from 'svelte-preprocess';
import watchAndRun from '@kitql/vite-plugin-watch-and-run';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    vite: {
      plugins: [
        watchAndRun([
          {
            watch: '**/*.gql',
            run: 'npm run gen',
          },
        ]),
      ],
    },
  },
  preprocess: preprocess(),
};

export default config;
