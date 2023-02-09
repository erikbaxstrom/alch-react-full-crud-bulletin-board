import { useEffect, useState } from 'react';
// import { getPosts } from '../services/posts.js';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await getPosts();
        const data = ['post 1', 'ppost 2', 'post3'];
        setPosts(data);
      } catch (e) {
        setError(e.message);
        console.log('erroring out', e.message);
      }
    };
    fetchData();
  }, []);

  return { posts, error };
}
