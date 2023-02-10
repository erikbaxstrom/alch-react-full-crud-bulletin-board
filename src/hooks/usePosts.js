import { useEffect, useState } from 'react';
import { getPosts } from '../services/posts.js';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (e) {
        setError(e.message);
        console.error(e.message);
      }
    };
    fetchData();
  }, []);

  return { posts, error };
}
