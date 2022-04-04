import { writable } from 'svelte/store';
import { words } from '$lib/Config';

const word = writable(words[0]);

export { word };
