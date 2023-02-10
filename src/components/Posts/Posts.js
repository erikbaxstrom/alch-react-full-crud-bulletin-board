import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { usePosts } from '../../hooks/usePosts.js';
import PostCard from './PostCard/PostCard.js';

export default function Posts() {
  const { user } = useUser();
  const { posts } = usePosts();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
}
