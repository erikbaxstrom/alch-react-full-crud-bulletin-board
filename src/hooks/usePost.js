import { useEffect, useState } from 'react';
import { getPost } from '../services/posts.js';

export function usePost(id) {
  const [post, setPost] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      //   console.log('usePost getting id', id);
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (e) {
        setError(e.message);
        console.error(e.message);
      }
    };
    fetchPost();
  }, [id]);

  return { post };
}
