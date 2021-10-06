// https://developer.wordpress.org/rest-api/key-concepts/
const uri =
  'https://sayhello.how/wp-json/wp/v2/posts?orderby=title&order=asc&per_page=99';

export async function get(request) {
  const response = await fetch(uri, {
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
