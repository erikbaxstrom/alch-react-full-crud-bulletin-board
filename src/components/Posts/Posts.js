import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { usePosts } from '../../hooks/usePosts.js';

export default function Posts() {
  const { user } = useUser();
  const { posts } = usePosts();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <>
      <h1>Posts</h1>
      {console.log('Posts.js posts:', posts)}
      {posts.map((post) => {
        console.log(post);
      })}
    </>
  );
}
