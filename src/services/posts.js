import { client } from './client.js';

export async function getPosts() {
  const response = await client
    .from('posts')
    .select('*')
    .limit('50')
    .order('created_at', { ascending: false });
  //   console.log(response.data);
  return response.data;
}

export async function getPost(id) {
  const response = await client.from('posts').select('*').match({ id }).single();
  // console.log('db got back:', response);
  return response.data;
}
