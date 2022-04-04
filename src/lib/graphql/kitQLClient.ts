import { KitQLClient } from '@kitql/client';
import { ENDPOINT } from '$lib/Env';

export const kitQLClient = new KitQLClient({
  url: ENDPOINT,
  headersContentType: 'application/json',
  logType: ['client', 'server', 'operationAndvariables'],
});
