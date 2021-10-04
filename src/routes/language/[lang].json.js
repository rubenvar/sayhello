// ? not in use right now
const uri = 'https://sayhello.how/wp-json/wp/v2/posts';
import { allLanguages } from "$lib/stores";

export async function get(request) {
  const id = 64;
  const response = await fetch(`${uri}/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.status === 404) {
    return { body: [] };
  }

  return {
    status: response.status,
    body: await response.json(),
  };
}
